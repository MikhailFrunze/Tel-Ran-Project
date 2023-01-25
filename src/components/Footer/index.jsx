import React from 'react';
import s from './index.module.css';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';


export default function Footer() {
    return (
        <footer className={s.footer} id='footer'>
            <div className={s.contacts}>
                <h1>Contacts</h1>
                <p>+1 999 999 99 99</p>
                <div className={s.social_media}>
                    <a href="#"><WhatsAppOutlined className={s.icon} />WhatsApp</a>
                    <a href="https://www.instagram.com/"><Icon className={s.icon} icon="logos:instagram-icon" />instagram</a>
                </div>
            </div>
            <div className={s.address}>
                <h1>Address</h1>
                <h2>New York City <br />
                    5th Ave, 11, NY</h2>
                <h3>Open</h3>
                <h4>24 / 7</h4>
            </div>
        </footer>
    )
}
