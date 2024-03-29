import React from 'react';
import banner from '../../media/banner.png';
import s from './index.module.css';

export default function Banner() {
  return (
    <div className={s.banner_section}>
      <div className={s.banner_sub_section}>
        <p>Sale</p>
        <p>for the season opening</p>
        <div>
          <button className={s.btn_first}>All sales</button>
          <button className={s.btn_second}>More</button>
        </div>
      </div>
      <img className={s.banner_img} src={banner} alt="" />
    </div>
  )
}
