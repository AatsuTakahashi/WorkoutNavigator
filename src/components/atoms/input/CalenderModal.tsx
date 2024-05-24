import React from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import ButtonAtoms from '../button/ButtonAtoms';
import { COLOR_CODE } from '../../../constants/ColorCode';
import { ModalStyles } from './CalenderModal.module';
import { LeftArrowIcon } from '../icon/LeftArrowIcon';
import { RightArrowIcon } from '../icon/RightArrowIcon';
import { FORM_MESSAGE } from '../../../constants/Message';

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
    const { visible, minDate, maxDate } = this.props;
    const { selectedDate } = this.state;
    const selectedDateText: string = formatDate(selectedDate);

    return (
      <Modal isVisible={visible}>
        <View style={ModalStyles.container}>
          <Text style={ModalStyles.titleText}>
            {FORM_MESSAGE.CALENDER_TITLE}
          </Text>
          <Calendar
            current={selectedDateText}
            markedDates={{
              [selectedDateText]: {
                selected: true,
                selectedColor: COLOR_CODE.SILVERY_WHITE,
              },
            }}
            minDate={minDate ? formatDate(minDate) : undefined}
            maxDate={maxDate ? formatDate(maxDate) : undefined}
            renderArrow={(direction: 'left' | 'right') => {
              if (direction === 'left') {
                return <LeftArrowIcon size={30} />;
              } else {
                return <RightArrowIcon size={30} />;
              }
            }}
            theme={{
              todayTextColor: COLOR_CODE.BRONZE_RED,
            }}
            onDayPress={this.handlePressDay}
          />
          <View style={ModalStyles.confirmButtonContainer}>
            <ButtonAtoms
              buttonText={FORM_MESSAGE.DECIDE_BUTTON_TEXT}
              onPress={this.handlePressConfirmButton}
              buttonStyle={ModalStyles.confirmButton}
              textStyle={ModalStyles.confirmButtonText}
            />
          </View>
        </View>
      </Modal>
    );
  }
}
