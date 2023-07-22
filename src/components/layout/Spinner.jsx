import Spin from './assets/spinner.gif'

function Spinner() {
    return (
        <div className='w-100 mt-20'>
            <img src={Spin} width={180} alt='Loading...' className='text-center mx-auto'/>
        </div>
    )
}

export default Spinner