import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import artImage from '../../assets/art.jpg'

const Title = styled.h1`
font-size: 2.3em;
text-align: center;
color: #FFFFFF;
`;

const Button = styled.button`
color: #FFFFFF;
background-color: #63BFBC;
margin-top: 10px;
`;

const InputEmail = styled.input`
width: 375px;
padding: 10px;
height: 16px
border: 1px;
border-color: #D0BCFF;
background: transparent;
color: white;
&::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-image: url('./src/assets/Icon.png');
`;

function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <header>
                <Title>
                    Bienvenue <br /> apprenti sorcier !
                </Title>
            </header>

            <img src={artImage} alt="Art" width={375} height={351}></img>

            <form onSubmit={handleSubmit((d) => console.log(d))}>
                <div>
                    <InputEmail
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
                        <small>{errors.email.message}</small>
                    )}
                </div>
                <Button type="submit">
                    Continuer
                </Button>
            </form>
        </>
    )
}
export default Home