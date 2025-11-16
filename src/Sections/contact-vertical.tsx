import Button from '../components/Button';
import Link from '../components/Link';

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
                <div className='mt-[2vh]'>
                    Location: <Link text="Bucharest" href="https://www.google.com/maps/place/Bucharest" />/
                     <Link text="Otopeni" href="https://www.google.com/maps/place/Otopeni" />, <Link text="Romania" href="https://www.google.com/maps/place/Romania" />
                </div>
            </div>
        </div>
    );
}