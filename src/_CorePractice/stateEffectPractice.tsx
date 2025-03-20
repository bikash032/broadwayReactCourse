import SectionTitle from "../component/section/title/section-title.components";
import SectionDetail from "../component/section/detail/section-detail.component";
import { useEffect, useState } from "react";
import { LoaderSkeleton } from "../component/loader/skelaton.loader";

const LoginPage1 = () => {
  const [email, setEmail] = useState<string | null>(
    "bikash@gmail.com"
  ); //
  const [data, setData] = useState<string | undefined | null>();
  const [loading, setLoading] = useState<boolean>(false);
  // email="hello@gmail.com"
  // setEmail("hello2@gmail.com") 

  useEffect(() => {
    // This hooks is mainly not used normally
    console.log(
      "This hook is always trigger as if there is either be update/change or any circumstances"
    );
  });

  useEffect(() => {
    console.log("I am triggerd when the components will only mount");
    //This effect hooks will be used when we need fetch data and call of the API
    // This is for the one time API call  
    setTimeout(() => {
      setData(`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quo
        ducimus doloremque aspernatur odio ex blanditiis sapiente deleniti
        nam et voluptate maxime, nulla, hic reiciendis magni porro.
        Accusamus, illo voluptate!`);
    }, 3000);
  }, []);

  useEffect(() => {
    // This will be used when we need we have dependencies with other compnenents
    console.log("I will only triggerd when the loading state is update");
  }, [loading]);

  return (
    <>
      <div className="felx flex ml-10 mt-10 border-2 size-full justify-center">
        <div className="border-2  border-solid m-5 bg-violet-950 text-white p-5 ">
          <SectionTitle PageTitle="Welcome Back!!!" subTitle="Welcomeback to login screen!!!"></SectionTitle>
          <SectionDetail>
            <p className="text-justify text-yellow-400">
              {data ? (
                data
              ) : (
                <>
                 <LoaderSkeleton/>
                </>
              )}
            </p>
            <p className="text-black shadow-2xl rounded-2xl shadow-amber-300 border-1 border-solid p-5 bg-amber-200">
              <p className="text-4xl text-red-600">{email}</p>Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Suscipit ipsa velit,
              asperiores expedita beatae dolore laudantium mollitia delectus
              esse cum. Delectus fugiat nobis quidem neque odit omnis maiores
              unde facere?
            </p>
          </SectionDetail>
        </div>
        <SectionTitle PageTitle="Login" classes="text-red-500" />
      </div>
    </>
  );
};
export default LoginPage1;

{
  /* <div className=" felx flex m-96 border-2 size-full dark:bg-gray-950">
  <div className="flex-1 bg-teal-200">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel labore
    explicabo, corrupti totam accusantium iste ut voluptate ad, molestias
    facilis sequi, quis dignissimos placeat quisquam tempora laborum ullam!
    Commodi.
  </div>
  <div>
    <div className="flex items-center justify-center bg-blend-color py-5">
      <h1 className="text-center text-2xl text-teal-800 font-bold mb-10 ">
        LOGIN
      </h1>
    </div>
  </div>
</div>; */
}
