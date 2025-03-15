import React from 'react';
import Button from '../components/button';

export default function ContactVertical() {

    return (
        <div className='h-full gap-4 p-3 panel flex flex-col justify-around text-center
         overflow-y-auto overflow-x-hidden bg-[var(--panel-transparent-bg-cl)]'>
            <div>
                <div className="text-2xl/1 mb-[5vh] mt-[3vh]">Bonef Teofil</div>
                Passionate student
            </div>
            <div className="flex flex-col gap-[3vh] w-full">
                <Button href="https://www.linkedin.com/in/bonefteofil/?locale=en_US" icon="linkedin">
                    LinkedIn<br />@bonefteofil
                </Button>
                <Button href="https://www.github.com/bonefteofil" icon="github">
                    Github<br />@bonefteofil
                </Button>
                <Button href="mailto: bonef.teofil@gmail.com" icon="email">
                    Email<br />bonef.teofil@gmail.com
                </Button>
                <div className='mt-[2vh]'>Location: Bucharest/Otopeni, Romania</div>
            </div>
        </div>
    );
}