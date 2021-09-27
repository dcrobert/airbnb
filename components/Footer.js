function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 
                        px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>Diversity and Belonging</p>
                <p>Guest Referrals</p>
                <p>Airbnb Associates</p>
                <p>Gift cards</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Host your home</p>
                <p>Responsible hosting</p>
                <p>Resource center</p>
                <p>Host an experience</p>
                <p>Community Center</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Center</p>
                <p>Neighborhood Support</p>
                <p>Trust & Safety</p>
                <p>Cancellation options</p>
                <p>Sourcing</p>
            </div>
        </div>
    )
}

export default Footer
