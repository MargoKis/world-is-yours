import React from 'react';
import Button from '../common/Button';

const Personal = () => {
    return (
        <>
            <h3 className='text-blue font-raleway lining-nums proportional-nums  font-semibold mb-10 text-2xl'>Контактна інформація</h3>
            <div className='flex justify-between gap-x-32   flex-col xxl:flex-row'>

                {/* profile setting */}
                <div className='left-side w-1/2 min-w-500 mb-10 '>
                    <div className='flex gap-5 justify-between'>
                        <label htmlFor='username' className='w-1/2 text-darkGrey font-raleway text-4 font-medium'>Ім’я
                            <input id='username' type="text" className="flex mt-2 w-5/5 p-3 items-center self-stretch rounded-xl border border-black focus:border-blue-500 outline-none" />
                        </label>
                        <label htmlFor='userSurname' className='w-1/2  text-darkGrey font-raleway text-4 font-medium'>Ім’я
                            <input id='userSurname' type="text" className="flex mt-2 w-5/5 p-3 items-center self-stretch rounded-xl border border-black focus:border-blue-500 outline-none" />
                        </label>
                    </div>

                    <div className='flex flex-col mt-5 w-5/7 '>
                        <label htmlFor='userNumber' className='w-1/2 text-darkGrey font-raleway text-4 font-medium'>Номер телефону</label>
                        <div className='flex w-5/5 gap-5 mt-2'>
                            <input id='userNumberCode' type="text" className="flex w-2/7 p-3 items-center self-stretch rounded-xl border border-black focus:border-blue-500 outline-none" />

                            <input id='userNumber' type="text" className="flex w-5/5 p-3 items-center self-stretch rounded-xl border border-black focus:border-blue-500 outline-none" />
                        </div>
                    </div>
                    <div className='flex gap-5 justify-between mt-5'>
                        <label htmlFor='userEmail' className='w-5/7 text-darkGrey font-raleway text-4 font-medium'>Ім’я
                            <input id='userEmail' type="text" className="flex mt-2 w-5/5 p-3 items-center self-stretch rounded-xl border border-black focus:border-blue-500 outline-none" />
                        </label>
                    </div>
                    <div className='flex gap-5 justify-between mt-5'>
                        <label htmlFor='userDate' className='w-2/7 text-darkGrey font-raleway text-4 font-medium'>Ім’я
                            <input id='userDate' type="text" className="flex mt-2 w-5/5 p-3 items-center self-stretch rounded-xl border border-black focus:border-blue-500 outline-none" />
                        </label>
                    </div>

                </div>


                {/* change password */}
                <div className='right-side w-1/2 min-w-500'>
                    <h4 className='font-raleway lining-nums proportional-nums text-lg font-semibold mb-10'>Зміна паролю</h4>
                    <div className='flex gap-5 justify-between mt-5 '>
                        <div className='w-5/7'>
                            <label htmlFor='userPassword' className='text-darkGrey font-raleway text-4 font-medium'>Новий пароль  </label>
                            <input id='userPassword' type="text" className="flex mt-2 w-5/5 p-3 items-center self-stretch rounded-xl border border-black focus:border-blue-500 outline-none" />
                        </div>
                    </div>
                    <div className='flex gap-5 justify-between mt-5 '>
                        <div className='w-5/7'>
                            <label htmlFor='userPasswordConfirm' className='text-darkGrey font-raleway text-4 font-medium'>Підтвердження паролю  </label>
                            <input id='userPasswordConfirm' type="text" className="flex mt-2 w-5/5 p-3 items-center self-stretch rounded-xl border border-black focus:border-blue-500 outline-none" />
                        </div>
                    </div>
                </div>

            </div>
            <Button classNameBtn="flex w-500 justify-center items-center rounded-xl bg-custom-black p-5 text-white mt-8" >Зберегти</Button>
        </>
    );
}

export default Personal;
