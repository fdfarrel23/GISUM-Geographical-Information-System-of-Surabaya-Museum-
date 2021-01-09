import React, { Component } from 'react';
import './home.css';

import logo from '../asset/AppLogoWhite.svg';
import book from '../asset/book.svg';
import sociology from '../asset/sociology.svg';
import museum from '../asset/museum.svg';
import waveTop from '../asset/wave-top.svg';
import waveBottom from '../asset/wave-bottom.svg';
import soekarno from '../asset/soekarno.png';
import suroboyo from '../asset/suroboyo.svg';
import gulatOklo from '../asset/gulat-oklo.png';
import undukanDoro from '../asset/undukan-doro.png';
import larungAri from '../asset/larung-ari.png';
import footerLogo from '../asset/footer-logo.svg';
import instagram from '../asset/instagram.svg';
import facebook from '../asset/facebook.svg';
import twitter from '../asset/twitter.svg';

import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

class home extends Component {

   cariMuseumOnClick=(event)=>{
      this.props.history.push("/Maps");
   }

   render() {
      return (
         <div>
            <div className="main">
               <div className="main__content">
                  <div className="h-25">
                     <img src={logo} alt="logo"/>
                  </div>
                  <div className="main__contentPositioning">
                     <h1 className="text-white">Ayo Ke Museum</h1>
                     <p className="text-white">Selamatkan Sejarah Dari Bencana</p>
                     <div className="garis-putih-1"></div>
                     <button className="text-white m-4 main__button justify-content-center" 
                     onClick={this.cariMuseumOnClick}>Cari Museum <FiChevronRight size={20} /></button>
                  </div>
 
                  <div className="h-25 flex-x x-center y-end pb-1 animate__animated animate__bounce animate__infinite">
                     <button className="text-white next__button justify-content-center"><FiChevronDown size={20} /></button>
                  </div>
               </div>
            </div>

            <div className="content">
               <div className="content__title justify-content-center">
                  <h1>Apa Yang Kamu Dapat di Museum</h1>
               </div>
               <div className="d-flex justify-content-center">
                  <div className="garis-hijau-1"></div>
               </div>
               <div className="justify-content-center container__contentBox">
                  <div className="content__box flex-column justify-content-center align-items-center">
                     <img src={book} alt="logo"/>
                     <p>Meningkatkan pengetahuan dan wawasan</p>
                  </div>
                  <div className="content__box flex-column justify-content-center align-items-center">
                     <img src={sociology} alt="logo"/>
                     <p>Berinteraksi dengan orang lain</p>
                  </div>
                  <div className="content__box flex-column justify-content-center align-items-center">
                     <img src={museum} alt="logo"/>
                     <p>Rekreasi dan hiburan</p>
                  </div>
               </div>
            </div>

            <div className="quotes">
               <img className="wave-top position-absolute" src={waveTop} alt=""/>
               <img className="wave-bottom position-absolute" src={waveBottom} alt=""/>

               <div className="quotes__content h-100">
                  <div className="h-100 d-flex justify-content-center align-items-center">
                     <img className="quotes__img" src={soekarno} alt="foto"/>
                     <div className="quotes__text">
                        <h1 className="text-white">"Jangan pernah melupakan sejarah. Ini akan membuat dan mengubah siapa diri kita."</h1>
                        <div className="quotes__name d-flex justify-content-end align-items-end">
                           <p className="text-white">Ir. Soekarno</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="culture">
               <div className="d-flex justify-content-between align-items-center">
                  <div className="culture__header">
                     <h1>Budaya di Surabaya</h1>
                     <div className="garis-hijau-2"></div>
                  </div>
                  <img src={suroboyo} alt="logo"/>
               </div>

               <div className="culture__holder">
                  <div className="culture__content">
                     <div className="culture__container d-flex align-items-center">
                        <div className="culture__text">
                           <h1>Gulat Okol</h1>
                           <p>Ini adalah tradisi pertunjukan yang menampilkan permainan 
                              gulat antara dua orang di atas tumpukan jerami. Mereka yang 
                              berhasil menjatuhkan lawan akan menjadi pemenang dan diberi 
                              hadiah yang telah disiapkan sebelumnya. Tradisi ini biasanya 
                              dilakukan saat musim kemarau sebagai salah satu ritual 
                              memanggil hujan.</p>
                        </div>
                        <img className="culture__img" src={gulatOklo} alt=""/>
                     </div>
                  </div>

                  <div className="culture__content">
                     <div className="culture__container d-flex align-items-center">
                        <img className="culture__img" src={undukanDoro} alt=""/>
                        <div className="culture__text">
                           <h1>Undukan Doro</h1>
                           <p>Undukan Doro atau burung dara adalah salah satu tradisi 
                              unik yang sudah dilakukan warga Surabaya sejak puluhan 
                              tahun silam. Warga biasanya akan membawa pasangan burung 
                              dara andalan mereka untuk diadu terbang. Burung jantan yang 
                              lebih cepat sampai ke betina setelah terbang dari kejauhan 
                              ditetapkan sebagai pemenang.</p>
                        </div>
                     </div>
                  </div>

                  <div className="culture__content">
                     <div className="culture__container d-flex align-items-center">
                        <div className="culture__text">
                           <h1>Larung Ari-Ari</h1>
                           <p>Warga di kawasan pesisir Surabaya memiliki tradisi 
                              larung ari-ari ke lautan. Biasanya ari-ari dipendam di 
                              depan atau dekat rumah. Namun, beberapa penduduk 
                              yang berada di pesisir percaya kalau melarung ari-ari 
                              bayi ke lautan akan memberikan rezeki yang banyak 
                              untuk orang tua dan anak.</p>
                        </div>
                        <img className="culture__img" src={larungAri} alt=""/>
                     </div>
                  </div>
               </div>
            </div>

            <div className="footer">
               <div className="footer__left">
                  <img src={footerLogo} alt="logo"/>
                  <p className="text-white">Copyright &copy; 2020-2021 GISUM</p>
               </div>

               <div className="footer__right">
                  <p className="text-white">Find Us</p>
                  <div>
                     <img className="sosmed" src={instagram} alt=""/>
                     <img className="sosmed ml-4 mr-4" src={facebook} alt=""/>
                     <img className="sosmed" src={twitter} alt=""/>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default home;
