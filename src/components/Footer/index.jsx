import React from 'react'
import s from './index.module.css'
import { WhatsAppOutlined } from '@ant-design/icons'
import { Icon } from '@iconify/react';


export default function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.contacts}>
                <h1>Контакты</h1>
                <p>+7 999 999 99 99</p>
                <div className={s.social_media}>
                    <a href="#"><WhatsAppOutlined className={s.icon} />WhatsApp</a>
                    <a href="#"><Icon className={s.icon} icon="logos:instagram-icon" />instagram</a>
                </div>
            </div>
            <div className={s.address}>
                <h1>Адрес</h1>
                <h2>г. Космонавтов <br />
                    проезд Космонавтов, д.11</h2>
                <h3>Режим работы</h3>
                <h4>Круглосуточно</h4>
            </div>
        </footer>
    )
}
