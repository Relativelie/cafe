import URLS from "constants/urls";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "store";
import Modal from "react-modal";
import { FormInput } from "components";
import Button, { ButtonColorTypesENUM } from "components/Button";
import { useForm } from "react-hook-form";
import Mail from "assets/icons/Mail";
import Key from "assets/icons/Key";
import { Credentials } from "stores/auth";

const Auth = observer(() => {
  const { authStore } = useStore();
  const { isLoggedIn } = toJS(authStore);
  const { signOut, checkIsLoggedIn, signIn } = authStore;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  const logout = () => {
    signOut();
    navigate(URLS.HOME);
  };

  const onCancelClick = () => {
    setIsModalOpen(false);
    reset();
  };

  console.log(errors);

  return (
    <>
      {isLoggedIn ? (
        <h5 className="cursor-pointer" onClick={logout}>
          Logout
        </h5>
      ) : (
        <h5 className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
          Login
        </h5>
      )}
      <div>
        <Modal
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          isOpen={isModalOpen}
          onRequestClose={onCancelClick}
          style={{
            overlay: {
              position: "absolute",
              background: "rgba(0, 0, 0, 0.7)",
              zIndex: 50,
            },
          }}
        >
          <form
            onSubmit={handleSubmit((val) => {
              signIn(val as Credentials);
            })}
            className="flex flex-col justify-center items-center h-full"
          >
            <div>
              <label className="h5 ml-2 text-gray">Email</label>
              <FormInput
                name="email"
                leftIcon={<Mail />}
                register={register}
                errors={errors}
              />
            </div>
            <div>
              <label className="h5 ml-2 text-gray">Password</label>
              <FormInput
                name="password"
                leftIcon={<Key />}
                register={register}
                errors={errors}
              />
            </div>

            <div className="grid grid-rows-[40px] grid-cols-[repeat(2,200px)] gap-4 mt-4">
              <Button type="submit" color={ButtonColorTypesENUM.Green}>
                <h5>Sign in</h5>
              </Button>
              <Button onClick={onCancelClick} color={ButtonColorTypesENUM.Gray}>
                <h5>Cancel</h5>
              </Button>
            </div>
            <div className="flex flex-col gap-4 mt-4 items-center">
              <h5 className="text-black">OR</h5>
              <Link to="" className="text-black underline underline-offset-4">
                Registration
              </Link>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
});

export default Auth;
