import React from 'react';

import { useAppDispatch,useAppSelector} from '../../hooks/redux-hooks';
import { RootState } from '../../store';
import { setBookingDateOrder,setBookingId,setCustomerUserId} from '../../store/booking-slice';
import { setModalCalendar} from '../../store/books-slice';

import styles from './button.module.scss';

interface Booking {
    customerFirstName: string,
    customerId: number,
    customerLastName:string,
    dateOrder: string,
    id: number,
    order: boolean,
}
interface Props {
    buttonText: string,
    delivery: boolean | null,
    booking: Booking | null,
    order: boolean | undefined,
    handleClick: () => void,
}

export const Button: React.FC<Props> = ({buttonText,delivery, booking, order, handleClick}) => {

    const dispatch = useAppDispatch();
    // const getModalCalendar = () => {
    //     dispatch(setModalCalendar(true))
    //   }
    const { user } = useAppSelector((state: RootState) => state.user);

    const buttonClick = () => {
        if(booking){
            dispatch(setCustomerUserId(booking.customerId))
            dispatch(setBookingId(booking.id));
            dispatch(setBookingDateOrder(booking.dateOrder))
            console.log('booking', new Date(booking.dateOrder).getDate() )
        }
        handleClick()
        // console.log(booking)
    }

    return(


    <button onClick={buttonClick} type='button'    className={booking === null && delivery === null  ?  styles.book_button_free : (booking?.customerId !== user?.id && order  ?  styles.book_button_rezerv_list  :  styles.book_button_free )    } >
        {buttonText}
    </button>
)
    }

