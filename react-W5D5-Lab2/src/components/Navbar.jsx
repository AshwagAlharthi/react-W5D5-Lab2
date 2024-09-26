function Navbar() {
    return (
        <div className="relative w-full h-[90vh]">
            <img className="w-[100vw] h-[90vh] "
                src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2" />
            <div className="absolute top-0 left-0 w-full h-[90vh] bg-black bg-opacity-30">
            <div className="text-white absolute top-14 left-16 h-[60vh] flex flex-col justify-between items-start">
                <h2 className="font-bold text-xl">FreshGoods</h2>
                <p className="text-6xl w-[80vw] max-sm:w-[50vw]">Concisely <br/> describe your <br/>product or service</p>
                <p>No need to get clever. Tell people exactly what you're offering,<br/> then use this space to communicate your key value proposition.</p>
                <button className="bg-[#ffb400] text-black py-1 px-8 rounded-sm">ORDER NOW</button>
            </div>
            </div>      
        </div>
    )
}

export default Navbar