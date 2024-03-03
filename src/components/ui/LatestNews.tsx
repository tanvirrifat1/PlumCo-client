"use client";
import Loading from "@/app/loading";
import { useAddAllBlogsQuery } from "@/redux/api/blogApi";
import { isLoggedin } from "@/service/auth.service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GrLinkNext } from "react-icons/gr";

const LatestNews = () => {
  const arg = {};
  const { data, isLoading } = useAddAllBlogsQuery({ ...arg });

  const router = useRouter();
  const userloggedIn = isLoggedin();

  const handleBlog = (id: string) => {
    router.push(`/blog/${id}`);
    // if ( !userloggedIn ) {
    //   router.push("/login");
    // } else {
    //   router.push(`/blog/${id}`);
    // }
  };

  console.log(data);
  return (
    <section className="py-10 lg:-mt-[90px] md:py-20 container">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-11">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Latest News & Blog
            </h2>
            <p className="text-base text-body-color">
              If you are looking for a blog article related to pipe services,
              you might consider writing or searching for articles on topics
              such as plumbing tips, pipe maintenance, common plumbing issues,
              or specific pipe-related services. Here is a general outline for a
              blog article on pipe services
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          data?.map((blog: any) => (
            <div
              key={blog.id}
              onClick={() => handleBlog(blog?.id)}
              className="rounded-md shadow-md mb-6 md:mb-0 lg:mb-0"
            >
              <figure className=" ">
                <Image
                  src={blog?.image}
                  alt="Shoes"
                  width={100}
                  height={100}
                  className="h-[330px] md:h-[250px] lg:h-[330px] w-full object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-lg md:text-xl lg:text-2xl mb-2">
                  {blog?.title}
                </h2>
                <p className="text-sm md:text-base lg:text-lg mb-4">
                  {blog?.content.length > 100
                    ? blog?.content.slice(0, 70)
                    : blog?.content}
                  ...
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="avatar mr-2">
                      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                        <Image
                          src={blog?.author?.profileImage}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="text-xs md:text-sm lg:text-base">
                      {blog?.author?.fullName}
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-outline text-xs md:text-sm lg:text-base">
                      <GrLinkNext />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default LatestNews;
