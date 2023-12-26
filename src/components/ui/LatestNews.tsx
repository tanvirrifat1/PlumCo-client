"use client";
import Loading from "@/app/loading";
import { useAddAllBlogsQuery } from "@/redux/api/blogApi";
import { isLoggedin } from "@/service/auth.service";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  return (
    <section className="lg:-mt-64 mt-6 w-full lg:p-[180px] mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
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
      <div className="w-full p-6 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {isLoading ? (
          <>
            <Loading />
          </>
        ) : (
          data?.map((blog: any) => (
            <>
              <div
                onClick={() => handleBlog(blog?.id)}
                className="rounded-md shadow-md "
              >
                <figure className=" ">
                  <Image
                    src={blog?.image}
                    alt="Shoes"
                    width={100}
                    height={100}
                    className="h-[330px] w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{blog?.title}</h2>
                  <p>
                    {blog?.content.length > 100
                      ? blog?.content.slice(0, 70)
                      : blog?.content}
                    ...
                  </p>
                  <div className="flex justify-between">
                    <div>
                      <div className="card-actions justify-start">
                        <div className="avatar">
                          <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <Image
                              src={blog?.author?.profileImage}
                              width={20}
                              height={20}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className=" mt-4 lg:ml-3">
                          {blog?.author?.fullName}
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-outline">Read more...</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </section>
  );
};

export default LatestNews;
