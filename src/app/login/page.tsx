"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormIntput";
import LoadingButton from "@/components/ui/LoginSpinner";
import SmallSpinner from "@/components/ui/SmallSpinner";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/service/auth.service";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<Boolean>(false);
  const [userLogin] = useUserLoginMutation();

  const [error, setError] = useState<string>("");
  const [check, setCheck] = useState<boolean>(true);

  let { role } = getUserInfo() as any;

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      const res: any = await userLogin({ ...data });

      if (res.error) {
        setError(res.error);
        setCheck(false);
      } else {
        setError("");
      }
      if (res?.data?.accessToken) {
        router.push("/profile");
        Swal.fire({
          title: `User login successfully`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setLoading(false);
        storeUserInfo({ accessToken: res?.data?.accessToken });
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div>
      <Link href={"/home"}>
        <div className="ml-36 mt-10">
          <BiArrowBack className="text-4xl" />
        </div>
      </Link>
      <div>
        <Helmet>
          <title>Plumbing | Login</title>
        </Helmet>
      </div>
      <div className="flex justify-center items-center h-screen  bg-[#F9FAFB]">
        <div className="flex flex-col justify-center px-6 py-12 lg:px-8 w-[400px] mx-auto ring bg-white shadow rounded">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-center  font-bold leading-9 tracking-tight text-gray-900">
              Get Dashboard access Hits the Access
            </h2>
            <div className="flex justify-center">
              <button
                className="btn btn-outline"
                onClick={() =>
                  //@ts-ignore
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Button
              </button>
            </div>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h1 className="font-semibold">
                  Do not share any one Email or Password
                </h1>
                <div className="border px-2 py-4 mt-6 rounded ">
                  <p className="">For Super-Admin</p>
                  <p>
                    email: abesh@gmail.com
                    <br /> Password: 123456
                  </p>
                </div>
                <div className="border px-2 py-4 mt-3 rounded">
                  <p className="">For Admin</p>
                  <p className="">
                    email: mez@gmail.com <br /> Password: 123456
                  </p>
                </div>
              </div>
            </dialog>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form submitHandler={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <div className="mt-2">
                    <FormInput
                      id="email"
                      name="email"
                      type="email"
                      label="Email address"
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <FormInput
                      id="password"
                      name="password"
                      type="password"
                      label="Password"
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="flex items-center justify-between my-5">
                    <div className="form-control"></div>
                    <div className="text-sm"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <LoadingButton
                  type="submit"
                  className="btn btn-accent mt-3 w-full"
                  value="Login"
                >
                  {loading ? <SmallSpinner /> : "Login"}
                </LoadingButton>
              </div>
            </Form>

            <p className="mt-10 text-center text-sm text-gray-500">
              not have your account?{" "}
              <Link
                href="/signup"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                signup
              </Link>
            </p>
            {error && (
              <small className="text-red-500 text-center text-xl pt-4 block">
                {error}
              </small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
