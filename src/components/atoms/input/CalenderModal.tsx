import React from 'react';
import { Button, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';

const THEME_COLOR: string = '#36C1A7';

const formatDate = (date: Date): string => {
  let format: string = 'YYYY-MM-DD';

  format = format.replace(/YYYY/g, date.getFullYear().toString());
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));

  return format;
};

interface DateObject {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
}

interface Props {
  // 表示フラグ
  visible: boolean;
  // 選択中日付の初期値
  defaultDate?: Date;
  // 選択可能最小日付
  minDate?: Date;
  // 選択可能最大日付
  maxDate?: Date;
  // 日付決定時処理
  onConfirm: (date: Date) => void;
}
interface State {
  selectedDate: Date;
}

export default class CalenderModal extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedDate: this.props.defaultDate
        ? this.props.defaultDate
        : new Date(),
    };
    this.handlePressDay = this.handlePressDay.bind(this);
    this.handlePressConfirmButton = this.handlePressConfirmButton.bind(this);
  }

  public handlePressDay(date: DateObject) {
    // selectedDateを更新
    this.setState({
      selectedDate: new Date(date.year, date.month - 1, date.day),
    });
  }

  public handlePressConfirmButton() {
    const { selectedDate } = this.state;

    if (this.props.onConfirm) {
      this.props.onConfirm(selectedDate);
    }
  }

  render() {
    const { visible, minDate, maxDate, onConfirm } = this.props;
    const { selectedDate } = this.state;
    const selectedDateText: string = formatDate(selectedDate);

    return (
      <Modal isVisible={visible}>
        <View>
          <Text>日付を選択してください。</Text>
          <Calendar
            current={selectedDateText}
            markedDates={{
              [selectedDateText]: {
                selected: true,
                selectedColor: THEME_COLOR,
              },
            }}
            minDate={minDate ? formatDate(minDate) : undefined}
            maxDate={maxDate ? formatDate(maxDate) : undefined}
            renderArrow={(direction: 'left' | 'right') => {
              if (direction === 'left') {
                return <AntDesign name='left' />;
              } else {
                return <AntDesign name='right' />;
              }
            }}
            theme={{
              todayTextColor: THEME_COLOR,
            }}
            onDayPress={this.handlePressDay}
          />
          <Button title='決定' onPress={this.handlePressConfirmButton} />
        </View>
      </Modal>
    );
  }
}
