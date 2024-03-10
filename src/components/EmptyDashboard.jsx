import dashboard_spidey from './../images/dashboard.jpg'

export default function EmptyDashboard(){
    return(
        <div className="grid w-full text-center text-white  pt-32">
            <h2 className="text-purple-700 font-thin text-4xl mb-12">Welcome Sinameki's Playground</h2>
            <p>
                Web Application Security tool for Web Pentesters and Bug bounty hunter. The tool aim is maximize to automate web security process with gui.
            </p>
            <p className="mb-8">It's looks like dashboard currently empty. You can start scan with features in the menu.
                If you have any problem or want to give a feedback you can contact me any time.
            </p>
            <p>
                <b className="text-purple">Twitter:</b> https://twitter.com/SinamekiDev
            </p>
            <p className="mb-12">
                <b className="text-purple">Discord:</b> sinamekisarp
            </p>
            <p>Thank you for using. You can check my other projects: https://github.com/sarpdora23?tab=repositories</p>
            <div className='grid w-full justify-items-center mt-4'>
                <img className='w-64' src={dashboard_spidey}></img>
                <p className='text-center text-xl font-bold text-purple-600'><i>"With great power comes great responsibility"</i></p>
            </div>
        </div>
    )
}