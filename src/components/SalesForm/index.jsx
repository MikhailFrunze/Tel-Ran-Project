import React from 'react'
import s from './index.module.css'
import gnome from '../../media/gnome.png'
import { useForm } from 'react-hook-form';

export default function SalesForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur'
    });

    const submit = data => console.log(data);

    const numberRegex = /^\d+$/;

    const phoneRegister = register('phone', {
        required: '* The field "phone" is required',
        pattern: {
            value: numberRegex,
            message: '* Not valid number format'
        }
    });

    



    return (
        <div className={s.sales_form_block}>
            <div className={s.gnome}>
                <img src={gnome} alt="gnome" />
            </div>
            <div className={s.sales_form}>
                <h1>Скидка 5%</h1>
                <p>на первый заказ</p>
                <form onSubmit={handleSubmit(submit)} className={s.form} >
                    <input className={s.form_input} type="tel" name='phone' placeholder='+7' {...phoneRegister} />
                    <button>Получить скидку</button>
                </form>
            </div>

            <div className={s.error}>
                {errors.phone && <p>{errors.phone?.message}</p>}
            </div>

        </div>
    )
}
