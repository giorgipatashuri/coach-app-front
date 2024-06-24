import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
const Home = () => {
  return (
    <div>
      <div className="container mb-34">
        <div className="flex w-[80%] m-auto mt-16 gap-10 p-10">
          <div className="w-[70%] flex flex-col gap-7">
            <h1 className="font-extrabold text-2xl">
              Football app ამარტივებს თამაშების ორგანიზებას და გვეხმარება გუნდის
              მოძებნაში
            </h1>
            <p>
              პასუხის მენეჯმენტი, ავტომატური შეხსენებები, გუნდის შემადგენლობა,
              მატჩის საუკეთესო მოთამაშის ხმის მიცემა
            </p>
            <Link href={"/auth"}>
              <button className=" w-[200px]  font-medium  bold rounded text-center bg-green-400">
                დარეგისტრირდი უფასოდ
              </button>
            </Link>
          </div>
          <div>
            <Image
              src={"https://footinho.com/images/footinho-screens-v3.png"}
              width={700}
              height={700}
              alt={""}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" w-[80%] m-auto mt-16 gap-10 p-10">
          <h2 className="like-h1 mb-6">
            +30.000 მომხმარებელი იყენებს football app -ს
          </h2>

          <div className="row">
            <div className="col-md-6">
              <div className="feature-list-item">
                <h4>
                  <i className="icon ion-checkmark-circled green"></i> მათჩების
                  მენეჯმენტი
                </h4>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="feature-list-item ">
                <h4>
                  <i className="icon ion-checkmark-circled green"></i>მოწვევები
                  ემაილზე ან ლინკით
                </h4>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="feature-list-item">
                <h3>
                  <i className="icon ion-checkmark-circled green"></i> თამაშის
                  საუკეთესო მოთამაშის არჩევა
                </h3>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="feature-list-item">
                <h3>
                  <i className="icon ion-checkmark-circled green"></i>
                  თამაშები
                </h3>
              </div>
            </div>

            <div className="col-md-6">
              <div className="feature-list-item">
                <h3>
                  <i className="icon ion-checkmark-circled green"></i> გუნდის
                  წყობები
                </h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-list-item">
                <h4>
                  <i className="icon ion-checkmark-circled green"></i>
                  მოთამაშეების სია
                </h4>
              </div>
            </div>
          </div>

          <Link href={"/auth"}>
            <button className=" w-[200px] h-11 mt-7  font-medium  bold rounded text-center bg-green-400">
              დარეგისტრირდი
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
