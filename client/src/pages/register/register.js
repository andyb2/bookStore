import { userRegistration } from '../../store/thunkCreators';
import { connect } from 'react-redux';

const Register = () => {

    const registerUser = async (event) => {
        if (event.target.password.value === event.target.retype.value) {
            const userInfo = {
                email: event.target.email.value,
                password: event.target.password.value
            }
            console.log(`Success!`)
            await userRegistration(userInfo)
        } else {
            console.error(`Password does not match`)
        }
    }

    return (
        <div className="registerParent">
            <h1 className="registerHeader">Register</h1>
            <form onSubmit={registerUser}>
                <textarea
                    placeholder="Email"
                    name="email"
                ></textarea>
                <textarea
                    placeholder="Password"
                    name="password"
                ></textarea>
                <textarea
                    placeholder="Re-type Password"
                    name="retype"
                ></textarea>
                <button>submit!</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        userRegistration: (userInfo) => {
            dispatch(userRegistration(userInfo))
        }
    }
}

export default connect(null, mapDispatchToProps)(Register)