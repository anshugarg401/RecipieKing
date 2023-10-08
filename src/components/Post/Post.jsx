// // import emptysaved from "../assets/images/util/Group269.png";

// function Post() {
//   const datapost = [
//     {
//       Username: "User Name",
//       Userheader: `User Headline   `,
//       usering:"https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?s=2048x2048&w=is&k=20&c=4kYlrBEQrLWS--wVUBYiNnMCX6psXAFLuTnARiJotiM=",
//       userpostimg:"https://media.istockphoto.com/id/1501243033/photo/chatbot-or-assistant-robot-chat-with-speech-bubble.jpg?s=2048x2048&w=is&k=20&c=Z-9vOZFkrbQRvemzBn4-AkKJCD5i0MubuRfrTSZjZ38=",
//       Domain: "Domain",
//       Content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
//                   praesentium molestiae qui ullam at sequi, est expedita vel explicabo
//                   magni quasi.`,
//     },
//     {
//       Username: "User Name",
//       Userheader: `User Headline   `,
//       usering:"https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?s=2048x2048&w=is&k=20&c=4kYlrBEQrLWS--wVUBYiNnMCX6psXAFLuTnARiJotiM=",
//       userpostimg:"https://media.istockphoto.com/id/1501243033/photo/chatbot-or-assistant-robot-chat-with-speech-bubble.jpg?s=2048x2048&w=is&k=20&c=Z-9vOZFkrbQRvemzBn4-AkKJCD5i0MubuRfrTSZjZ38=",
//       Domain: "Domain",
//       Content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
//                   praesentium molestiae qui ullam at sequi, est expedita vel explicabo
//                   magni quasi.`,
//     },
//     {
//       Username: "User Name",
//       Userheader: `User Headline   `,
//       usering:"https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?s=2048x2048&w=is&k=20&c=4kYlrBEQrLWS--wVUBYiNnMCX6psXAFLuTnARiJotiM=",
//       userpostimg:"https://media.istockphoto.com/id/1501243033/photo/chatbot-or-assistant-robot-chat-with-speech-bubble.jpg?s=2048x2048&w=is&k=20&c=Z-9vOZFkrbQRvemzBn4-AkKJCD5i0MubuRfrTSZjZ38=",
//       Domain: "Domain",
//       Content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
//                   praesentium molestiae qui ullam at sequi, est expedita vel explicabo
//                   magni quasi.`,
//     },
//     {
//       Username: "User Name",
//       Userheader: `User Headline   `,
//       usering:"https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?s=2048x2048&w=is&k=20&c=4kYlrBEQrLWS--wVUBYiNnMCX6psXAFLuTnARiJotiM=",
//       userpostimg:"https://media.istockphoto.com/id/1501243033/photo/chatbot-or-assistant-robot-chat-with-speech-bubble.jpg?s=2048x2048&w=is&k=20&c=Z-9vOZFkrbQRvemzBn4-AkKJCD5i0MubuRfrTSZjZ38=",
//       Domain: "Domain",
//       Content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
//                   praesentium molestiae qui ullam at sequi, est expedita vel explicabo
//                   magni quasi.`,
//     },
//     {
//       Username: "User Name",
//       Userheader: `User Headline   `,
//       usering:"https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?s=2048x2048&w=is&k=20&c=4kYlrBEQrLWS--wVUBYiNnMCX6psXAFLuTnARiJotiM=",
//       userpostimg:"https://media.istockphoto.com/id/1501243033/photo/chatbot-or-assistant-robot-chat-with-speech-bubble.jpg?s=2048x2048&w=is&k=20&c=Z-9vOZFkrbQRvemzBn4-AkKJCD5i0MubuRfrTSZjZ38=",
//       Domain: "Domain",
//       Content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
//                   praesentium molestiae qui ullam at sequi, est expedita vel explicabo
//                   magni quasi.`,
//     },
//     {
//       Username: "User Name",
//       Userheader: `User Headline   `,
//       usering:"https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?s=2048x2048&w=is&k=20&c=4kYlrBEQrLWS--wVUBYiNnMCX6psXAFLuTnARiJotiM=",
//       userpostimg:"https://media.istockphoto.com/id/1501243033/photo/chatbot-or-assistant-robot-chat-with-speech-bubble.jpg?s=2048x2048&w=is&k=20&c=Z-9vOZFkrbQRvemzBn4-AkKJCD5i0MubuRfrTSZjZ38=",
//       Domain: "Domain",
//       Content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
//                   praesentium molestiae qui ullam at sequi, est expedita vel explicabo
//                   magni quasi.`,
//     },
//   ];

//   return (
//     <>
//       {datapost.length === 0 ? (
//         <div>
//           {/* <img
//             src={emptysaved}
//             alt=""
//             className="object-contain h-60 xl:h-96 w-full  sm:px-10 md:px-20"
//           />
//           <div style={{ WebkitTextFillColor: "#4F51C0" }}>
//             <p className="font-semibold text-xl xl:text-3xl text-center sm:mt-6 md:mt-8 xl:mt-12">
//               No Saved Posts Yet
//             </p>
//           </div> */}
//         </div>
//       ) : (
//         <>
//           {datapost &&
//             datapost.map((item) => (
//               <p key={item.Username}>
//                 {/* <div
//                   className={` 
//                   px-6
//                   // h-[450px] w-[350px] md:w-[420px]  block rounded-2xl p-5  `}                   
//                   // lg--md
//                   style={{
//                     backgroundColor: "#2f2748",

//                     border: "1px solid rgba(255, 255, 255, 0.05)",

//                     background:
//                       "linear-gradient(to right, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.15) 60%, rgba(255, 255, 255, 0.1) 90%)",
               
//                     backdropFilter: "blur(2px)",
//                   }}
//                 >
//                   <div className=" pt-4">
//                     <img
//                       alt="Home"
//                       src={item.userpostimg}
//                       className=" h-56 md:h-60 w-full object-fit"
//                     />
//                   </div>

//                   <div className="mt-2">
//                     <div className="mt-4 flex  items-center gap-2  text-xs ">
//                       <div className="inline-flex shrink-0 items-center gap-3 ">
//                         <a href="" className="flex-none">
//                           <img
//                             src={item.usering}
//                             className="h-14 w-14  rounded-full"
//                             alt=""
//                           />
//                         </a>

//                         <div className="mt-1.5 sm:mt-0  flex-shrink">
//                           <p className=" text-lg font-semibold leading-normal ">
//                           {item.Username}
//                           </p>

//                           <p className="font-normal text-base leading-none">
//                           {item.Userheader}
//                           </p>
//                         </div>
//                         <div className=" flex flex-row-reverse p-1 pr-5 font-light text-base self-start flex-none w-[130px] lg:w-[190px]">
//                           <p>{item.Domain}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <dl
//                     className="mt-3 flex items-center 
//       overflow-hidden "
//                   >
//                     <div className="  text-base font-light px-2 ">
//                     {item.Content}
//                     </div>
//                   </dl>
//                 </div> */}
//                 <article className="flex bg-white transition hover:shadow-xl my-4">
//   <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
//     <time
//       datetime="2022-10-10"
//       className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
//     >
//       <span>2022</span>
//       <span className="w-px flex-1 bg-gray-900/10"></span>
//       <span>Oct 10</span>
//     </time>
//   </div>

//   <div className="hidden sm:block sm:basis-56">
//     <img
//       alt="Guitar"
//       src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
//       className="aspect-square h-full w-full object-cover"
//     />
//   </div>

//   <div className="flex flex-1 flex-col justify-between">
//     <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
//       <a href="#">
//         <h3 className="font-bold uppercase text-gray-900">
//           Finding the right guitar for your style - 5 tips
//         </h3>
//       </a>

//       <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
//         dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
//         sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
//         voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
//         Molestias explicabo corporis voluptatem?
//       </p>
//     </div>

//     <div className="sm:flex sm:items-end sm:justify-end">
//       <a
//         href="#"
//         className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
//       >
//         Read Blog
//       </a>
//     </div>
//   </div>
// </article>
//               </p>
//             ))}
//         </>
//       )}
//     </>
//   );
// }
// export default Post;

import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import KingBedRoundedIcon from '@mui/icons-material/KingBedRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import Star from '@mui/icons-material/Star';

// type RentalCardProps = {
//   category: React.ReactNode;
//   image: string;
//   liked?: boolean;
//   rareFind?: boolean;
//   title: React.ReactNode;
// };

export default function RentalCard({
  category,
  title,
  rareFind = false,
  liked = false,
  image,
}) {
  const [isLiked, setIsLiked] = React.useState(liked);
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        bgcolor: 'neutral.softBg',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': {
          boxShadow: 'lg',
          borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
        },
      }}
    >
      <CardOverflow
        sx={{
          mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
          mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
          '--AspectRatio-radius': {
            xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
            sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
          },
        }}
      >
        <AspectRatio
          ratio="1"
          flex
          sx={{
            minWidth: { sm: 120, md: 120 },
            '--AspectRatio-maxHeight': { xs: '160px', sm: '9999px' },
          }}
        >
          <img alt="" src={image} />
          <Stack
            alignItems="center"
            direction="row"
            sx={{ position: 'absolute', top: 0, width: '100%', p: 1 }}
          >
            {rareFind && (
              <Chip
                variant="soft"
                color="success"
                startDecorator={<WorkspacePremiumRoundedIcon />}
                size="md"
              >
                Rare find
              </Chip>
            )}
            <IconButton
              variant="plain"
              size="sm"
              color={isLiked ? 'danger' : 'neutral'}
              onClick={() => setIsLiked((prev) => !prev)}
              sx={{
                display: { xs: 'flex', sm: 'none' },
                ml: 'auto',
                borderRadius: '50%',
                zIndex: '20',
              }}
            >
              <FavoriteRoundedIcon />
            </IconButton>
          </Stack>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <div>
            <Typography level="body-sm">{category}</Typography>
            <Typography level="title-md">
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: 'text.primary' }}
              >
                {title}
              </Link>
            </Typography>
          </div>
          <IconButton
            variant="plain"
            size="sm"
            color={isLiked ? 'danger' : 'neutral'}
            onClick={() => setIsLiked((prev) => !prev)}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              borderRadius: '50%',
            }}
          >
            <FavoriteRoundedIcon />
          </IconButton>
        </Stack>

        <Stack
          spacing="0.25rem 1rem"
          direction="row"
          useFlexGap
          flexWrap="wrap"
          sx={{ my: 0.25 }}
        >
          <Typography level="body-xs" startDecorator={<FmdGoodRoundedIcon />}>
            Collingwood VIC
          </Typography>
          <Typography level="body-xs" startDecorator={<KingBedRoundedIcon />}>
            1 bed
          </Typography>
          <Typography level="body-xs" startDecorator={<WifiRoundedIcon />}>
            Wi-Fi
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ mt: 'auto' }}>
          <Typography
            level="title-sm"
            startDecorator={
              <React.Fragment>
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.200' }} />
              </React.Fragment>
            }
            sx={{ display: 'flex', gap: 1 }}
          >
            4.0
          </Typography>
          <Typography level="title-lg" sx={{ flexGrow: 1, textAlign: 'right' }}>
            <strong>$540</strong> <Typography level="body-md">total</Typography>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}