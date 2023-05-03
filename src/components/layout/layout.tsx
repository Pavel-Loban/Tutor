import React, {useState} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import {ReactComponent as  Preloader} from '../../assets/image/preloader.svg';
import {useAppSelector } from '../../hooks/redux-hooks';
import { RootState } from '../../store';
import { AlertBooking } from '../alert-booking/alert';
import { Alert } from '../alert/alert';
import { Footer } from '../footer';
import { Header } from '../header';
import { Sections } from '../sections';


import styles from './layout.module.scss';

export const Layout = () => {

  // --------------------------------------

  // const isBookingRemove =  useAppSelector(isBookingRemoveSelector)
  //   const isBookingSuccess =  useAppSelector(isBookingSuccessSelector)
  //   const isEditBookingSuccess =  useAppSelector(isEditBookingSuccessSelector)

  // const [bookId, setBookId] = useState('');
  const [bookingId, setBookingId] = useState('');
    const [dateOrder, setDateOrder] = useState('');



 // --------------------------------------
  const { menuIsOpen} = useAppSelector((state: RootState) => state.burger);
  const {status, statusCategories, books, modalCalendar} = useAppSelector((state: RootState) => state.books);

  const {statusPageBook } = useAppSelector((state: RootState) => state.book);
  const {bookingResponse,bookingReject, loaderBooking } = useAppSelector((state: RootState) => state.booking);

  const token  = localStorage.getItem('tokenData') ;


  React.useEffect(() => {


    if(loaderBooking){

        document.body.classList.add('preloader_true');
    }else{
        document.body.classList.remove('preloader_true');
    }

},[loaderBooking])

  return (

  <React.Fragment >

  {((status === 'loading' && books.length === 0 ) || statusPageBook ===   'loading' ||  statusCategories === 'loading' || loaderBooking)    ? <div className={styles.wrapper_preloader} data-test-id='loader'
> <Preloader className={styles.preloader} width={68.7} height={68.7} /></div>  : null}

{token
?
<section className={styles.main_page}>

{status === 'error' || statusPageBook ===   'error' ||  statusCategories === 'error' ? <Alert  textAlert='Что-то пошло не так. Обновите страницу через некоторое время.'/> : ''}

{bookingResponse && <AlertBooking bookingError={false}/>}
{bookingReject && <AlertBooking bookingError={true}/>}


<Header />
<section className={styles.content}>
    <div
    onClick={e => e.stopPropagation() } role='presentation'
    className={ menuIsOpen ? styles.burger_menu_active :styles.burger_menu}>
    <Sections dataId1='burger-showcase' dataId2='burger-books' dataIdCategory='burger' isDesktop={false}/>
    </div>


<Outlet/>
</section>

<Footer/>
</section>

 :

<Navigate to='/auth' />
}



  </React.Fragment>
  )
    }
