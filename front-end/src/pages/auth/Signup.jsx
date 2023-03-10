import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useCallback } from "react";

import app from "../../firebase";

const SignUp = ({ hitory }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.pushState("/");
        } catch (error) {
            alert(error);
        }
    }, [history])

    return (
        <>
            <img
                src="https://www.ehret-creation.fr/wp-content/uploads/sites/20/2022/01/artisanat-maroc-1020x600.jpg"
                className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
            <div className="container mx-auto p-4">
                <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                    <form onSubmit={handleSignUp}>
                        <CardHeader
                            variant="gradient"
                            color="blue"
                            className="mb-4 grid h-28 place-items-center"
                        >
                            <Typography variant="h3" color="white">
                                Sign Up
                            </Typography>
                        </CardHeader>

                        <CardBody className="flex flex-col gap-4">
                            <Input label="Name" size="lg" />
                            <Input type="email" label="Email" size="lg" />
                            <Input type="password" label="Password" size="lg" />
                            <div className="-ml-2.5">
                                <Checkbox label="I agree the Terms and Conditions" />
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button type="submit" variant="gradient" fullWidth>
                                Sign Up
                            </Button>
                            <Typography variant="small" className="mt-6 flex justify-center">
                                Already have an account?
                                <Link to="/Login">
                                    <Typography
                                        as="span"
                                        variant="small"
                                        color="blue"
                                        className="ml-1 font-bold"
                                    >
                                        Sign in
                                    </Typography>
                                </Link>
                            </Typography>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </>
    );
}

export default SignUp;
