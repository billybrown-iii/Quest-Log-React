export default function Campaign ({campaign}) {
    function test () {
        console.log(campaign)
    }
    
    return <div>
        Welcome to the campaign view!
        <button className="button" onClick={test}>Click me to log campaign data to console.</button>
    </div>
}