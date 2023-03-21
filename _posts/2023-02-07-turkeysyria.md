---
layout: blog-post
categories: blog
title: "Calamity"
description: "Turkey-Syria Earthquake 2023"
image: assets/img/blog/turkeysyria.png
date: 2023-02-07
tags: thoughts
---

Like the rest of the world, I’ve been reading article after article of the 7.8 and 7.5 magnitude earthquakes that struck Turkey and Syria earlier this week. Needless to say, I’m pretty emotionally disturbed right now. Thousands of photos and videos flooded the internet Monday morning, making this whole tragedy that much more poignant and stomach-churning. 

* A heartbreaking photo of a father, sitting in the ruins of what was once an apartment building. He is bundled up in a near fetal position with a thousand-yard stare, holding a hand that's reaching out through some tiny crevice. The ashened, lifeless hand belongs to his now dead fifteen year old daughter.

* A devastating video of a young girl with her sibling; half of their bodies lodged in by concrete and webs of rebar. With hair and face coated in dust, they look longingly at the rescuers, with eyes that's seen too much for such young souls, “Get me out of here mister, I’ll do anything for you,” the older child whispers to rescuers. “I’ll be your servant,” she adds, as a rescuer replies, “No, no.”

* An astonishing article detailing the miraculous survival of a newborn girl, rescued with her umbilical cords still attached to her dead mother. In what had to be the most extreme end of human suffering, the mother gave birth while trapped underneath a collapsed building. I pray that the mother may rest peacefully knowing her baby is alive and well, that the rescuer found her baby in time.

One death is a tragedy. A thousand death becomes a statistic. While these stories are gut-wrenching, they serve as a helpful reminder that the casualty figures we see on headlines are <u>not just</u> numbers; they're the conglomeration of these heartbreaking stories multiplied 20,000+ times.

There is an unwelcomed numbing effect that eventually takes over. Perhaps it's useless, even masochistic, to dwell on the misery for too long. There's plenty of positive news as well. Like the numerous call for action and donation campaigns sprouting up on social media. Seeing entire circles of friends united towards one cause is truly heartwarming. On the ground, volunteers and rescuers have saved well over 9,000 people who were once trapped beneath the rubble. These people are heroes. With frost-bitten hands and heavy bloodshot eyes, extreme levels of exhaustion and sleep deprivation, they brace the unreasonable coldness of the night, lifting, digging, and heaving. They enter collapsed buildings with no regard for possible aftershocks that might entomb them too, all in the hope of saving just one more person. 

It’s moments like these when you realize the absurdity of our tribal political discourse. Left-wing, right-wing, blue, red, all of our trivial trial and tribulations, the war in Ukraine, geopolitical maneuvers, man-caused sufferings, conflict between countries, religions, race, genders, ideologies. How astoundingly ridiculous...

I'm reminded of a political cartoon I saw many years ago. Two aliens are conversing about the discovery of nuclear weapons on Planet Earth. I'm paraphrasing here:

> "We found intelligent life on Earth. They are now capable of building nuclear weapons! Should we be worried?" Said one alien to another.
>
> "There is no need to worry. They only seem interested in bombing themselves" the other alien replied.

It’s also moments like these that I get a renewed sense of purpose in my chosen career. I've worked on multiple seismic retrofits here in the Bay Area. It's inspiring to know that the numbers on my spreadsheet, complicated equations scribbled in my notepad, line works on a blueprint, all translate to tangible value in the real world. I'd be lying if I said the work is always fun, and the remuneration can't possibly match that of a Bay Area software developer nor a New York financial analyst, but golly is it fulfilling to think your work may one day prevent even one tragedy like the ones above from happening, that your efforts will contribute to a more resilient city, that lives might be saved because of you and the community of engineers, regulators, financiers who contribute to these retrofit efforts.

It would be hubris for me to say I have anything valuable to add to this crisis. I'm writing this article partly for selfish reasons as a way to collect my thoughts. But often after a major earthquake, a few family members or friends inevitably reach out as if I am some subject matter expert. I am not... But I'll try my best to give some perspective as a junior engineer specializing in earthquakes engineering.



## Will An Earthquake Like That Happen Here?

Yes. 

We know a big one will hit us eventually. **It is not a matter of if, it is a matter of when**. USGS estimates that within the next 30 years in the Bay Area, the probability is ([source](https://www.usgs.gov/faqs/what-probability-earthquake-will-occur-los-angeles-area-san-francisco-bay-area#:~:text=Within%20the%20next%2030%20years,an%20earthquake%20measuring%20magnitude%207.5)):

- 72% that an earthquake measuring magnitude 6.7 will occur
- 51% that an earthquake measuring magnitude 7 will occur
- 20% that an earthquake measuring magnitude 7.5 will occur

Unlike countries like Japan, which gets hit by a major earthquakes every decade or so, we tend to have some sort of collective amnesia when it comes to earthquakes. Immediately after the Northridge earthquake of 1994, roughly 2/3 of Cupertino homeowners had earthquake insurance. In 2019, that number is around 10%.

In Japan, landlords can charge their tenants higher rent for properties that are seismically-isolated. Here, developers are hesitant to spend extra money going beyond code-minimum because they see no upside. Will an earthquake even happen in the building's 50 year design life? Existing building owners are reluctant to spend millions of dollars retrofitting their building in ways that the tenants won't even notice. Who can blame them. We are not well-equipped at dealing with low-probability high-consequence events like this.



## Are We More Prepared In The US?

Yes, but not enough. 

Generally speaking, our building code, engineering, regulating agencies, permitting process, planning, and construction quality are all better. But there are two very important caveats:

* Not all buildings are new. Our cities are still largely defined by inventories of older structures built shortly after the second world war, when building codes weren't as developed.
* The goal of the building code is to minimize casualties, not to make buildings earthquake-proof. Buildings that are seismically code-compliant are designed **to prevent collapse** (i.e. saving lives). You should still expect damage, down time, and tremendous economic losses. Refer to the Christchurch earthquake of 2011 for a model of what might happen here. It takes a long time for us to recover from natural disasters like earthquakes.

The concrete buildings you see in Turkey and Syria are here at home too! Although they may be better designed and constructed here, they're still vulnerable. In 2014, Professor Jack Moehle at Berkeley, arguably the most prominent expert in seismic behavior of concrete structure, combed through inventories of building in LA and identified concrete buildings at a risk of collapse. He initially labeled them "death buildings", but there were some legal complications to doing that. He eventually sorted everything out with the city and released the address of about 1,500 old concrete buildings. You can read more about it in the link here: [Article Link](https://www.latimes.com/local/la-me-01-18-concrete-building-quake-20140118-story.html). We have quite a few here in the Bay Area as well.



## How Much Do We Know About Building Behavior Under Earthquakes?

All models are wrong, some are useful.

We can construct highly sophisticated physics simulations of buildings through FEM models, but the model is only as good as the assumptions we make. There is just too much uncertainty when it comes to building structures. A more complex model isn't always more accurate or informative. Even though interest in earthquake engineering has waned significantly in recent decades, there's still so much we need to learn. In fact, I'd wager the public will be astonished by the degree of our ignorance, at how little we know, and at the types of assumptions we make. There is just an insane amount of uncertainty in earthquake engineering. That one famous quote comes to mind; about how we model materials we don't fully understand, into shapes we can't analyze, to withstand forces we can't predict. 

We always learn something new after an earthquake. The 1994 Northridge earthquake uncovered a dangerous detailing flaw that causes connections in steel buildings to facture unexpectedly. This deficiency affected many tall buildings in San Francisco. Who knows what the next earthquake will uncover. You can read more about it here: [San Francisco’s Big Seismic Gamble](https://www.nytimes.com/interactive/2018/04/17/us/san-francisco-earthquake-seismic-gamble.html).

Although architects seem to have an insatiable appetite for creativity and weird geometries, structural engineers have always been able to accommodate. We've made many innovative strides in the field of earthquake engineering, but inevitably there will be some concerns. Here's a thought-provoking quote from the NYT article above.

> This raises concerns among experts such as Thomas H. Heaton, the director of the Earthquake Engineering Research Laboratory at the California Institute of Technology and perhaps the most prominent skeptic of building high rises in earthquake zones.
>
> “It’s kind of like getting in a new airplane that’s only been designed on paper but nobody has ever flown in it” he said.



## Why Aren't Modern Buildings Designed To Be Earthquake Proof?

Inertia.

If you live in California, and you recently bought a house, look in your stack of paperwork. You'll likely find clauses similar to the ones below:

<img src="/assets/img/blog/turkeysyria1.png" style="width:65%;"/>
*Excerpt I Got From a Friend Who Bought A House*

There's a nice analogy to car crashes I read somewhere online. 

* If you get into a car accident, your car might be totaled, but at least your life will be protected.
* If an earthquake happens, the building might be damaged beyond repair, but at least the occupants will be safe. 

Earthquake engineering is still evolving as a field. Innovations in the AEC industry tend to be slow due to liability and bureaucratic red tapes. Here are some interesting trends today that I hope will become widely adopted in the future:

* Adding replaceable "fuses" to the building to dissipate most of the earthquake energy. It would be inconceivable to design a multi-million dollar circuit without fuses to protect it, but that's exactly what we are doing right now with the code-minimum building design. I strategically weakening the structure at key locations, fuses:
  * isolate damage to specific areas of the building
  * massively reduce repair complexity
  * massively reduce down time
  * actually easier to design and less uncertainty because fuses are predictable and simple to model
* Seismic dampers that can dissipates energy without damaging the structure
* Self-centering mechanisms to counteract the tendency for building to get out-of-plumb after an earthquake.
* Base-isolation which has always been the gold standard for building earthquake protection

None of these options are particularly cost-prohibitive. Yes, they may increase the project cost a few percentage points, but that is nothing compared to the possible losses incurred after an earthquake. This is more of a policy and public awareness issue. Developers and the public needs to know these options exist and that there are tangible benefits for employing these technologies.



## What Type of Building Should I Avoid?

The most vulnerable buildings are:

* Soft-story buildings - the first floor will collapse very predictably.
  * <img src="/assets/img/blog/turkeysyria2.png" style="width:45%;"/>
* Unreinforced masonry - brick and mortar. No reinforcing steel.
  * <img src="/assets/img/blog/turkeysyria3.png" style="width:45%;"/>
* Old, non-ductile, and poorly detailed shear wall buildings - Common for old tall apartment buildings like the ones we saw in Turkey
* Tilt-up construction - Walls are cast on the ground then lifted into place to form a boxed perimeter. Then everything is tied together by a timber roof. Common for one-story warehouse or office buildings. We've dramatically improved the performance of these buildings over the years, but the older one's are prone to collapse (walls are not adequately tied to the roof and falls over).
  * <img src="/assets/img/blog/turkeysyria5.png" style="width:45%;"/>

The safest place you can be during an earthquake is inside a hospital, elementary school, police station, fire station, or buildings for essential services. These structures are designed to higher regulatory standards and are required to remain operational even after an earthquake. 

* Single family homes are also most likely okay. Dry walls might crack, bookshelves might fall, but these structures are just too light for the seismic acceleration to do any significant structural damage
* Super-tall skyscrapers are also quite safe from earthquakes. The frequency content of most earthquakes is too high to match the skyscrapers' low frequency of vibration. The design of many super-tall buildings are actually governed by wind and occupancy comfort considerations over earthquakes. You might still get very sea-sick on the top floor. In some ways, you're probably safer inside as it protects you from falling debris and cladding. [Check out this video which shows how building's period of vibration can drastically affect its behavior](https://www.iris.edu/hq/inclass/video/building_resonance__boss_model_construction__use). One area of uncertainty is soil quality; especially in SF. I'm not a geotechnical engineer so I can't make an informed opinion beyond that.



