import css from './footer.module.css';
import Logo from '../Logo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import AodOutlinedIcon from '@mui/icons-material/AodOutlined';

const Footer = () => {
    return ( 
        <footer>
            <div className={css.footer__container}>
                <div className={css.footer_quick_container}>
                <div className={css.footer_quick_grocery}>
                    <LocalGroceryStoreOutlinedIcon />
                   </div>
                <div className={css.footer_quick_text}>
                    <ul className={css.footer_quick_textn}>
                        <li className={css.footer_quick_gorcery_li}> <h3>БҮГДИЙГ НЭГ ДООРООС</h3> </li>
                        <li>Duis irure dolor voluptate velit cilluт</li>
                    </ul>
                    </div>
                <div className={css.footer_quick_timer}>
                    <TimerOutlinedIcon />
                   </div>
                <div className={css.footer_quick_text}>
                <ul className={css.footer_quick_textn}>
                        <li><h3>ШУУРХАЙ ХҮРГЭЛТ</h3></li>
                        <li>Duis irure dolor voluptate velit cilluт </li>
                    </ul> 
                </div>
                <div className={css.footer_quick_aod}>
                        <AodOutlinedIcon />
                 
                </div>

                <div className={css.footer_quick_text}>
                <ul className={css.footer_quick_textn}>
                        <li ><h3>ӨРГӨН СОНГОЛТ</h3> </li>
                        <li>Duis irure dolor voluptate velit cilluт </li>
                    </ul>
                </div>
              
                </div>
    
                <div className={css.footer__items__container}>

                <div className={css.footer__logo__container}>
                <Logo />
                </div>

                    <div className={css.footer__customer__container}>
                        <div className={css.footer__customer__header}>
                            <h1>ХЭРЭГЛЭГЧ</h1>
                        </div>
                        <ul className={css.fotter__customer__links}>
                            <li className={css.customer__link}>
                                <a href="/"> Дэлгүүр</a>
                            </li>
                            <li className={css.customer__link}>
                                <a href="/">Брендүүд</a>
                            </li>
                            <li className={css.customer__link}>
                                <a href="/">Таны купон</a>
                            </li>
                            <li className={css.customer__link}>
                                <a href="/">Таны оноо</a>
                            </li>
                            <li className={css.customer__link}>
                                <a href="/">Захиалга өгөх</a>
                            </li>
                            <li className={css.customer__link}>
                                <a href="/">Төлбөр төлөх</a>
                            </li>
                            <li className={css.customer__link}>
                                <a href="/">Хүргэлтийн үйлчилгээ</a>
                            </li>
                            <li className={css.customer__link}>
                                <a href="/">Бараа буцаалт</a>
                            </li>
                        </ul>
                    </div>
                    <div className={css.footer__help__container}>
                        <div className={css.footer__help__header}>
                            <h1>ТУСЛАМЖ</h1>
                        </div>
                        <ul className={css.fotter__help__links}>
                            <li className={css.help__link}>
                                <a href="/"> Түгээмэл асуулт</a>
                            </li>
                            <li className={css.help__link}>
                                <a href="/">Үйлчилгээний нөхцөл</a>
                            </li>
                            <li className={css.help__link}>
                                <a href="/">Нууцлалын баталгаа</a>
                            </li>
                            <li className={css.help__link}>
                                <a href="/">Хамтран ажиллах</a>
                            </li>
                            <li className={css.help__link}>
                                <a href="/">Холбогдох</a>
                            </li>
                        </ul>
                    </div>
                    <div className={css.footer__contact__container}>
                        <div className={css.footer__contact__header}>
                            <h1>ХАЯГ БАЙРШИЛ</h1>
                        </div>
                        <ul className={css.footer__contacts}>
                            <li className={css.footer__contact}>
                                <LocalPhoneIcon /> <span>7737-5737, 7737-3757</span>
                            </li>
                            <li className={css.footer__contact}>
                                <EmailIcon /> <span>hello@bmall.mn, user@ball.mn</span>
                            </li>
                            <li className={css.footer__contact}>
                                <LocationOnIcon /> <span>Чингэлтэй дүүрэг, 13-р хороолол, 6-р хороо, Монос Групп, 4-р давхар,
                                    Улаанбаатар хот
                                </span>
                            </li>
                            
                        </ul>
                    </div>
                   
                </div>
                <div className={css.fotter__copyright__container}>
                    <div> 
                    <ul className={css.nav}>
                        <li className={css.footer__copyright}>©2023 Bmall. All Rights Reserved. </li>
                    </ul>
                    </div>
                    <div className={css.footer__social__link__container}> 
                    <ul className={css.footer__social__links}>
                            <li className={css.social__link}>
                                <FacebookIcon />
                            </li> 
                            <li className={css.social__link}>
                                <InstagramIcon />
                            </li>
                        </ul>
                        </div>
                    </div>
            </div>
        </footer>
     );
}
 
export default Footer;
