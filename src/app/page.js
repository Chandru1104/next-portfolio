import Aboutsection from "@/components/Aboutsection";
import EducationExperienceToggle from "@/components/Educationsection";
import Herosection from "@/components/Herosection";
import Skillssection from "@/components/Skillssection";
import SocilaLinks from "@/components/SocialLinks";
import socialLinkDate from "@/data/socialLinksData";
import { getEntries } from "@/lib/contentful";

export const revalidate = 2592000; // 1 month in seconds

export default async function Home() {
  const skills = await getEntries("skills");
  const experiences = await getEntries("experience");
  const user = await getEntries("user");
  const links = await getEntries("links");

  return (
    <main className=" w-[80%] flex flex-col gap-20 pb-16 max-xl:w-[85%] max-lg:w-[95%]">
      <Herosection user={user} skills={skills} />
      <SocilaLinks links={links} />
      <Aboutsection user={user} />
      <Skillssection skills={skills} />
      <EducationExperienceToggle experiences={experiences} />
    </main>
  );
}
