import {BottomNav, Logo, SocialMedia} from '../index'

export default function Footer(){
    return(
        <footer className="relative overflow-hidden bg-white py-8">
            <div className="container relative z-10 mx-auto px-4">
                <div className="-m-8 flex flex-wrap items-center justify-between">
                    <div className="w-auto p-8">
                        <Logo/>
                    </div>
                    <div className="w-auto p-8">
                        {/* <BottomNav /> */}
                    </div>
                    <div className="w-auto p-8">
                        <SocialMedia/>
                    </div>
                </div>
            </div>
        </footer>
    )
}