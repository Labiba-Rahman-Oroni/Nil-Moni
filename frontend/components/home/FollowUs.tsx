import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/constants/site";

const base =
       "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal";

export default function FollowUs() {
       return (
              <section className="py-16 md:py-20">
                     <Container>
                            <div className="rounded-3xl border border-royal/10 bg-royal-tint px-8 py-12 text-center shadow-soft md:px-16">
                                   <p className="text-sm font-medium tracking-wide text-royal">
                                          আমাদের সাথে থাকুন
                                   </p>
                                   <h2 className="mt-2 text-3xl md:text-4xl">Follow NIL MONI</h2>
                                   <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/75">
                                          See our latest jewellery on Facebook and Instagram. Message us on
                                          Facebook for any enquiry.
                                          <br />
                                          নতুন গহনা দেখতে এবং যেকোনো প্রশ্নে ফেসবুকে মেসেজ করুন।
                                   </p>

                                   <div className="mt-8 flex flex-wrap justify-center gap-4">
                                          <a
                                                 href={siteConfig.facebookUrl}
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 className={`${base} bg-royal text-white shadow-soft hover:-translate-y-0.5 hover:opacity-95`}
                                          >
                                                 <FacebookIcon size={18} />
                                                 Facebook
                                                 <span className="sr-only"> (opens in a new tab)</span>
                                          </a>
                                          <a
                                                 href={siteConfig.instagramUrl}
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 className={`${base} border border-royal/30 bg-cream-pale text-royal hover:border-royal hover:bg-white`}
                                          >
                                                 <InstagramIcon size={18} />
                                                 Instagram
                                                 <span className="sr-only"> (opens in a new tab)</span>
                                          </a>
                                   </div>
                            </div>
                     </Container>
              </section>
       );
}