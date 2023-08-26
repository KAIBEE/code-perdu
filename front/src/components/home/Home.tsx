import { useForm } from 'react-hook-form'
import artImage from '../../assets/art.jpg'
import { useNavigate } from 'react-router-dom';
import { BigTitle } from '../styled/BigTitle';
import { InputStyled } from '../styled/InputStyled';

function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const navigate = useNavigate();

    const onSubmit = () => {
        return navigate("/talent")
    }

    return (
        <>
            <header>
                <BigTitle>
                    Bienvenue <br /> apprenti sorcier !
                </BigTitle>
            </header>

            <img src={artImage} alt="Art" width={375} height={351}></img>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <InputStyled
                        placeholder='Renseigne ton adresse e-mail'
                        type="search"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            validate: {
                                maxLength: (v) =>
                                    v.length <= 50 || "The email should have at most 50 characters",
                                matchPattern: (v) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                    "Email address must be a valid address",
                            },
                        })}
                    />
                    {errors.email?.message && (
                        <small>{errors.email.message as React.ReactNode}</small>
                    )}
                </div>
                {<button className="continueButton" type="submit">
                    Continuer
                </button>}
            </form>
        </>
    )
}

export default Home