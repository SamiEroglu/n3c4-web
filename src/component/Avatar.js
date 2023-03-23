import { React, useState } from 'react';
import { Berkavatar, Cnt3, } from '../icon';
import '../styles/avatar.css';


const Avatar = ({ icon, icon1, label, toggled, onClick }) => {
    const [open, setOpen] = useState(false);
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <div>
            <div className='toggle-cont'>
                <div className='toggle-yazi'>CORE_n3c4 -- Active-CREW /// WIP</div>

                <label>

                    <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
                    <span />
                    <strong>{label}</strong>

                </label>
            </div>
            <div className='avatar-container'>

                <div className="avatar-bir">
                    {open
                        ? <Cnt3 onClick={() => { setOpen(!open); }} />
                        : <Berkavatar onClick={() => { setOpen(!open); }} />}
                </div>
                <div className='avatar-iki'>{icon}</div>
                <div className='avatar-uc'>{icon}</div>
                <div className='avatar-dort'>{icon1}</div>

            </div>

            <div className='avatar-yazi-container' >

                <div className='yazi-bir-cont'>
                    <ul>
                        <div className='baslik-bir' >
                            DESIGNER
                            /FOUNDER
                        </div>
                        <div className='cizgi'></div>

                        <div className='altyazi-bir'>
                            berk
                            gul
                        </div>
                        <div className='alt-email'>
                            lexaria@n3wcr4ft.com
                        </div>
                    </ul>
                </div>
                <div className='yazi-bir-cont'>
                    <ul>
                        <div className='baslik-bir'>
                            Junior Developer
                        </div>
                        <div className='cizgi2'></div>

                        <div className='altyazi-iki'>
                            Ömer Açıkgöz
                        </div>
                        <div className='alt-email2'>
                            lexaria@n3wcr4ft.com
                        </div>
                    </ul>
                </div>

                <div className='yazi-bir-cont'>
                    <ul>
                        <div className='baslik-bir'>
                            Junior Developer
                        </div>
                        <div className='cizgi3'></div>

                        <div className='altyazi-uc'>
                            Sami Eroğlu
                        </div>
                        <div className='alt-email3'>
                            lexaria@n3wcr4ft.com
                        </div>
                    </ul>
                </div>
                <div className='yazi-bir-cont'>
                    <ul>
                        <div className='baslik-bir'>
                            DESIGNER
                            /FOUNDER
                        </div>
                        <div className='cizgi4'></div>
                        <div className='altyazi-dort'>
                            Ilgaz Korkmaz
                        </div>
                        <div className='alt-email4'>
                            ilgaz@bgc.email
                        </div>
                    </ul>
                </div>
            </div>

        </div>


    );
};

export default Avatar;
