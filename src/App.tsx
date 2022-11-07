import React, {useState} from 'react';
import './global style/style.scss'
import Header from "./page-components/header/header";
import Footer from "./page-components/footer/footer";

const App = () => {
    return (
        <div className={'wrapper'}>
            <Header onClick={()=>{}}></Header>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque dolorum earum, esse facilis inventore libero nobis numquam quam quis quos sapiente voluptates? Asperiores consequatur deserunt dolorum, eos est illum laborum modi natus optio sed sit suscipit totam velit veniam voluptas! Ad doloribus ea fugit impedit ipsum molestias nam, necessitatibus officia optio quasi reiciendis saepe sequi sit soluta tenetur totam veniam vitae voluptatibus. A accusamus, accusantium aliquid aut blanditiis corporis deserunt enim fuga impedit ipsa ipsum itaque maiores maxime modi neque nihil numquam officia perspiciatis placeat possimus, quidem quis quisquam quo quod recusandae reiciendis repudiandae saepe sequi sunt tempora unde vitae voluptatibus voluptatum. A accusantium at blanditiis consequuntur culpa deleniti deserunt dicta dolorum ea excepturi iste laboriosam minima nostrum odio quidem, ut veniam. Blanditiis cum dolore pariatur provident unde. A alias animi architecto corporis culpa cum debitis delectus earum excepturi exercitationem impedit in ipsam labore laboriosam minima molestias nam necessitatibus nemo neque nostrum obcaecati pariatur placeat possimus quidem repellat reprehenderit saepe similique sint tempore tenetur, totam velit vitae voluptatum? Aliquid aut eveniet, inventore odio pariatur perferendis quas quis sed! Accusantium at consequatur corporis cumque deleniti ea eum, harum, molestiae nemo nihil nobis provident quas sequi velit voluptatum. Ea magnam nihil officia placeat possimus quos, veritatis? Adipisci alias aspernatur beatae deleniti ducimus eius ex laboriosam magni minima officia quas, quasi sequi totam voluptas voluptatibus. Aliquam animi commodi cum delectus dignissimos dolores eligendi esse est eum explicabo facere neque optio quaerat qui quod repellat repellendus sint tenetur ut, voluptatum. Aliquam aperiam, aut beatae blanditiis corporis distinctio eos et fuga in itaque magni neque odio quae qui, quis rem reprehenderit ut veniam vitae voluptate! Aperiam delectus dignissimos dolore hic iste modi possimus suscipit! Ab at consequuntur, enim facere itaque maiores officiis pariatur quidem repellat sunt. Accusamus aliquam doloribus esse, libero nam nesciunt nihil provident. Ab, asperiores assumenda blanditiis culpa cumque deserunt dicta dignissimos dolore doloribus ducimus ea eligendi eos ex fuga fugiat, id ipsa ipsam iste iure nihil odio odit omnis pariatur quae quibusdam quidem rerum similique soluta tempore tenetur ullam velit vero voluptatem. Illo mollitia numquam quae. Accusamus ad amet aperiam asperiores at autem distinctio doloremque, doloribus ea est illum impedit obcaecati qui quisquam sapiente sequi soluta suscipit temporibus totam vitae. Consectetur, culpa dolor dolore ducimus exercitationem fuga nesciunt velit! Facilis, quisquam, tenetur? Architecto asperiores atque autem consequatur culpa cum, deleniti doloremque eligendi ex exercitationem expedita explicabo impedit, in ipsam ipsum labore laboriosam laborum maiores mollitia nam natus pariatur provident quae, ratione similique sint suscipit tenetur totam unde velit veniam voluptate voluptatibus voluptatum. Accusantium architecto asperiores corporis cumque dolorem doloribus ea explicabo facilis fugit illo ipsa iure iusto minima mollitia necessitatibus, nulla officiis porro quaerat quisquam ratione recusandae repudiandae rerum sed tempora tempore velit vitae! Alias assumenda atque corporis culpa deserunt distinctio eveniet illo, incidunt, itaque laboriosam laudantium magnam molestiae necessitatibus nemo obcaecati odio pariatur possimus provident quae quisquam recusandae reprehenderit rerum saepe similique temporibus vel vero voluptate. Accusamus culpa, cum, dolores eaque explicabo fuga fugiat magnam magni molestias mollitia nam optio pariatur perspiciatis porro sunt ut, velit? Alias autem consectetur ducimus enim fugit illum incidunt ipsam laudantium molestias nam odio quae quisquam sequi soluta temporibus, veritatis voluptas voluptatem? Amet atque autem cupiditate eius illum minus molestiae nihil quod rem velit? Deleniti eligendi enim esse, facilis suscipit ut veritatis voluptatem! Atque beatae consequatur deleniti eum excepturi, facilis, fugit hic, ipsam libero maiores molestiae neque quaerat quam quas qui quos rem rerum sunt suscipit ut? Asperiores assumenda at beatae consectetur consequatur corporis culpa deleniti dolore dolorem doloremque dolores dolorum eaque error et ex excepturi facere facilis fuga hic incidunt, iusto laudantium libero magnam magni maxime minus molestias nemo officia officiis omnis, optio rem sapiente temporibus! A alias aliquid asperiores cum debitis deserunt, dolor dolorem ducimus excepturi, fuga fugiat in iusto magni maxime minima necessitatibus officia officiis pariatur praesentium quasi qui quia, repellendus sequi. Aliquid amet commodi consequatur cupiditate, deleniti, doloremque eos fuga hic laborum molestiae mollitia, odit omnis quaerat quas reiciendis repellendus sed soluta voluptate. Accusantium aspernatur autem consequatur enim exercitationem maxime perferendis reiciendis repellat sapiente ullam. Ad animi commodi consectetur cumque delectus dignissimos doloribus dolorum enim, ex expedita impedit ipsam iusto labore maiores maxime molestias nihil, officiis quaerat quam, quasi quo quos ratione repellendus repudiandae sapiente sequi sint tempora velit veritatis voluptates? Accusamus asperiores autem consequuntur corporis cumque deserunt distinctio dolorem dolorum eligendi eum iure iusto labore nam nostrum nulla obcaecati porro quae quasi quidem quis reprehenderit repudiandae rerum sequi, sint suscipit, tempora, tenetur unde. Exercitationem, fugit magni placeat praesentium quae quaerat quidem rerum voluptas! At eos inventore itaque magnam perspiciatis quae repudiandae. Nemo, quibusdam, repellat? Accusantium aperiam corporis dicta eaque esse exercitationem id iure laudantium maiores minima porro quaerat sit, velit! Asperiores aut, dignissimos dolorem eligendi esse exercitationem explicabo fuga iure iusto maiores minima molestiae mollitia nostrum ratione repellendus unde vitae voluptatum. Ea et eveniet fugit ipsa iste officiis provident voluptatem voluptatibus. Adipisci beatae culpa cupiditate dolorem facere impedit, ipsam nesciunt omnis possimus quasi quibusdam, quidem saepe sit, tempora voluptatum. Aperiam deleniti earum, ex fugiat hic incidunt labore maxime modi praesentium quam ratione suscipit! Eveniet fuga fugiat iusto labore maiores quisquam recusandae repellat voluptate. Atque, error fuga ipsa laboriosam perferendis quibusdam. At beatae, commodi delectus dicta doloremque eius eligendi, ipsum itaque minus nam omnis quod sequi sint suscipit ut vero voluptatum! Cumque, doloribus laboriosam quam sapiente sed sint tempore! A animi architecto consequuntur distinctio dolorum, enim error et ipsa laborum minima molestiae natus non nulla officiis perspiciatis possimus, quae quaerat quibusdam quos reprehenderit suscipit tempore totam voluptas! Eaque earum, molestias omnis provident sequi tempora voluptate. Amet cum error esse natus nostrum numquam quaerat sunt ullam vero vitae. Ad facere harum nam quos rem. Accusamus architecto commodi cupiditate debitis dolorum impedit libero maiores maxime, nemo officia optio pariatur porro, praesentium repellat reprehenderit sit veniam. Accusantium, atque aut beatae dolor dolorum, enim eum excepturi ipsum magnam nam quas qui ullam vero, vitae voluptatibus. Adipisci architecto at aut commodi corporis cumque dolorem eaque est expedita hic modi officiis provident repellat sequi sint sunt, ut.
            <Footer></Footer>
        </div>
    );
};

export default App;