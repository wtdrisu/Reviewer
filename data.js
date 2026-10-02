/* Study content: edit NOTES, CARDS, and QUIZ here. Subject: The Contemporary World (Globalization). */
/* ================= DATA ================= */
const CH = {
  1:{name:"Defining Globalization", sub:"Conceptions, philosophies, economic globalization, actors (Group 1)"},
  2:{name:"Market Integration and the Global Interstate System", sub:"Global corporations, IFIs, IGOs, internationalism vs. globalism (Group 2)"},
  3:{name:"Global Governance and Asian Regionalism", sub:"States, IGOs, non-state actors, product networks, Asian organizations (Group 3)"}
};
function T(head, rows){ return rows.map(r=>({term:r[0], parts:head.slice(1).map((h,i)=>[h,r[i+1]])})); }

const NOTES = {
1:[
 {t:"Working definition of globalization", bullets:[
   "<b>Globalization</b> is the process of <b>increasing connections and interactions</b> among people, countries, businesses, and cultures through <b>trade, technology, communication, and the movement of people and ideas.</b>",
   "In short: the world becoming <b>more connected</b>.",
   "Example: a Filipino student uses TikTok, watches Korean dramas, buys products from China, or uses an American-made app. A phone may be designed in one country, manufactured in another, and run social media created somewhere else."]},
 {t:"Competing conceptions of globalization", entries:T(["Camp","Belief"],[
   ["Globalists","Globalization <b>connects countries</b> and makes the world more connected."],
   ["Skeptics","Globalization is <b>not as powerful</b> as people think, because <b>countries still control their own affairs</b>."],
   ["Transformationalists","Globalization is <b>changing the world</b>, but its <b>effects differ in every country</b>."]])},
 {t:"Underlying philosophies of globalization", note:"“Underlying philosophy” = the basic ideas, beliefs, or values behind a definition.", entries:T(["Philosophy","Core belief","Focus"],[
   ["Market globalism","Globalization should promote <b>free trade, open markets, businesses, and economic growth</b>.","Reducing barriers lets businesses trade freely and creates economic opportunities."],
   ["Justice globalism","Globalization should promote <b>fairness, equality, human rights, and social justice</b>.","Does not necessarily reject globalization; it should benefit <b>ordinary people</b>, not only wealthy countries, corporations, or individuals."],
   ["Religious globalism","Globalization can be understood through <b>religious beliefs and values</b>.","Connects believers across countries; some see <b>secularism or consumerism</b> as threats to religious values."]])},
 {t:"Why are there different definitions?", bullets:[
   "People have different <b>interests, experiences, and beliefs</b>.",
   "A businessman: “the expansion of international trade.” An environmentalist: “growing connection between countries that also creates environmental problems.”",
   "None gives the complete picture. Globalization is <b>complex and multidimensional</b>."]},
 {t:"Economic globalization", bullets:[
   "National economies become increasingly <b>integrated and interdependent</b> through cross-border movement of <b>goods, services, capital, technology, information, and people</b>.",
   "<b>Drivers:</b> lower transport and communication costs, trade liberalization, advances in finance and technology. These enable global supply chains, international investment, and rapid diffusion of knowledge.",
   "<b>Opportunities:</b> larger markets, foreign investment, access to technology. <b>Risks:</b> greater exposure to global shocks and competition."]},
 {t:"Modern world system (Wallerstein)", bullets:[
   "A concept from <b>Immanuel Wallerstein’s world-systems theory</b>: the global capitalist economy is <b>one interconnected system</b>, not separate national economies.",
   "Emerged around the <b>16th century</b>; driven by the <b>continuous accumulation of capital</b>.",
   "Structured by an international <b>division of labor</b>; a country’s economic, political, and social processes are shaped by its position in this hierarchy."]},
 {t:"Core, semi-periphery, periphery", entries:T(["Zone","Description"],[
   ["Core","Dominant, industrialized economies"],
   ["Semi-periphery","Intermediate economies"],
   ["Periphery","Less developed, often resource-exporting regions. Core countries typically <b>exploit</b> them through trade, investment, and global institutions."]])},
 {t:"Actors that facilitate economic globalization", entries:T(["Actor","Role"],[
   ["International economic organizations","<b>IMF, World Bank, WTO, OECD.</b> Platforms to negotiate trade agreements, resolve disputes, and promote liberalization. <b>IMF</b>: financial assistance and policy advice to stabilize economies. <b>World Bank</b>: long-term development projects (infrastructure, education, healthcare)."],
   ["Multinational companies (MNCs)","Operate across countries; build global supply chains; transfer technology, knowledge, and capital; create jobs, attract foreign investment, stimulate growth through innovation and competition."],
   ["Central banks","e.g., <b>Federal Reserve, European Central Bank</b>. Regulate money supply, interest rates, and exchange rates, affecting trade, investment flows, and financial stability."],
   ["Global civil society","Named in the slides as an actor, but no details were given."]])},
 {t:"Stance on global economic integration", entries:T(["","Points"],[
   ["Benefits","More jobs, cheaper products, access to new markets, faster growth for developing countries."],
   ["Challenges","Local businesses struggle to compete, income gaps widen, countries become dependent on each other."],
   ["Balanced stance","Support integration while pushing for <b>fair policies</b> that protect workers and local industries."]])}
],
2:[
 {t:"Market integration", bullets:[
   "Connecting the economies of different countries or regions through the exchange of <b>goods, services, capital, and resources</b>.",
   "Reduces barriers (tariffs, restrictions) and encourages cooperation, competition, and economic growth. Different markets work together as <b>one larger market</b>.",
   "Example: the <b>European Union</b> allows easier trade among members.",
   "Four elements: <b>international trade, investment, businesses, technology</b>."]},
 {t:"Global interstate system", bullets:[
   "The network of <b>independent, sovereign states</b> interacting through political, economic, social, and diplomatic relationships.",
   "Involves international relations, cooperation, agreements, diplomacy, economic relations, and security.",
   "Each state has its own government, laws, and national interests, but its actions affect other countries.",
   "Example: the Philippines importing goods from China and exporting to other countries.",
   "In short: how countries <b>interact, cooperate, compete, and build relationships</b>."]},
 {t:"International financial institutions (IFIs)", entries:T(["Institution","Role"],[
   ["IMF","International Monetary Fund: promotes <b>financial and monetary stability</b>."],
   ["World Bank","<b>Development</b> and financial support."],
   ["WTO","World Trade Organization: <b>international trade rules</b>."]])},
 {t:"Four major roles of IFIs", note:"They help create the global economy through financial support, stability, trade, and cooperation.", entries:T(["Role","What they do"],[
   ["1. Financial support","Provide loans and financial assistance to countries."],
   ["2. Economic stability","Help countries address financial and economic problems."],
   ["3. Facilitate trade","Support rules and cooperation for international trade."],
   ["4. International cooperation","Provide a platform for countries to work together."]])},
 {t:"Short history of global market integration", bullets:[
   "Grew throughout the <b>20th century</b> through trade, finance, technology, and transportation.",
   "After <b>World War II</b>: the <b>IMF, World Bank, and GATT</b> helped rebuild the global economy and promote trade.",
   "By the <b>1990s</b>: rapid expansion through multinational companies, trade agreements, and the <b>internet</b>."]},
 {t:"Global corporation", bullets:[
   "A company that operates in <b>multiple countries</b> and manages business activities across international markets, with headquarters, factories, offices, suppliers, employees, and customers worldwide."]},
 {t:"Ten attributes of global corporations", entries:T(["Attribute","Meaning"],[
   ["1. International operations","Operates in more than one country."],
   ["2. Global market presence","Customers and sales in different parts of the world."],
   ["3. Cross-border supply chains","Production and delivery steps happen in different countries."],
   ["4. Foreign direct investment","Invests directly in a business or operation in another country."],
   ["5. Advanced technology","Uses technology to manage business across countries."],
   ["6. Global workforce","Employees from different countries and cultures."],
   ["7. Global branding","Brand recognized in different countries."],
   ["8. Large financial resources","Funds for factories, offices, employees, technology, and markets."],
   ["9. Adaptability to different cultures","Flexible and respectful of cultural differences."],
   ["10. Global strategic management","Strategies and decisions consider the global market."]])},
 {t:"Effects of globalization on governments", bullets:[
   "Increases international cooperation and connects national economies.",
   "Creates global responsibilities and influences government policies.",
   "Increases the need to address international issues.",
   "Example: a country’s economic decisions can affect its trade relationships."]},
 {t:"Institutions that govern international relations", note:"There is no single world government. Intergovernmental organizations (IGOs) set rules, handle disputes, and keep countries talking.", entries:T(["Area","Institutions"],[
   ["Global peace and security","<b>UN</b>: largest forum, <b>193</b> members; the <b>Security Council (UNSC)</b> makes binding decisions, sends peacekeepers, imposes sanctions. <b>NATO</b>: military alliance of <b>32</b> North American and European nations; <b>collective defense</b> (an attack on one is an attack on all)."],
   ["Global economy and trade","<b>WTO</b>: rules for trade and resolves disputes. <b>IMF</b>: the “financial firefighter” with emergency loans. <b>World Bank</b>: loans and grants to developing countries for infrastructure and poverty reduction."],
   ["International law and justice","<b>ICJ</b> (World Court): legal disputes <b>between nations</b> (e.g., border disputes). <b>ICC</b>: prosecutes <b>individuals</b> for severe crimes such as war crimes or genocide."],
   ["Regional alliances","<b>EU</b>: <b>27</b> European countries; common laws, open borders, Euro. <b>ASEAN</b>: economic growth and political stability in Southeast Asia. <b>AU</b>: unity, peace, and integration across <b>55</b> African nations."]])},
 {t:"Internationalism vs. globalism", entries:T(["","Idea"],[
   ["Internationalism","Countries should <b>cooperate</b> and work together to solve common problems and achieve shared goals."],
   ["Globalism","The world is increasingly <b>connected</b>; what happens in one part of the world can affect people elsewhere."]])},
 {t:"Conclusion (Group 2)", bullets:[
   "Market integration (exchange of goods, services, capital, technology, ideas) and the global interstate system (the political framework for relationships, interests, cooperation, and conflicts) are closely connected.",
   "Challenges: <b>inequality, economic dependence, competition among states</b>. Fair policies and responsible international relations are needed for stability and sustainable development."]}
],
3:[
 {t:"Global governance", bullets:[
   "The way <b>countries and other international actors cooperate</b> to manage issues that affect the world."]},
 {t:"States", bullets:[
   "<b>Sovereign countries</b> with their own governments, territories, and populations. They remain the <b>main actors</b> in global governance.",
   "<b>Roles:</b> making international rules (treaties, agreements, laws); participating in international organizations (UN, WTO); protecting national interests; solving global problems (climate change, security, migration, pandemics); implementing global agreements through national laws and policies."]},
 {t:"Intergovernmental organizations (IGOs)", bullets:[
   "Groups formed by <b>three or more sovereign states</b> to tackle shared global challenges; the <b>backbone</b> of contemporary global governance."]},
 {t:"Examples of IGOs by function", entries:T(["Area","Organizations"],[
   ["Political cooperation and global law","<b>UN</b>: largest IGO, 193 members; diplomacy, human rights, preventing conflict. <b>ICC</b>: tries individuals accused of genocide or war crimes."],
   ["Trade, development, and finance","<b>WTO</b>: the global “referee” of commerce. <b>IMF</b>: “crisis bank” for loans and monetary support. <b>World Bank</b>: loans and grants for roads and power grids."],
   ["Global health and welfare","<b>WHO</b>: tracks diseases, organizes pandemic responses, sets health guidelines. <b>UNESCO</b>: cultural heritage, education, science, World Heritage Sites."],
   ["Security and specialized crime","<b>Interpol</b>: police cooperation among <b>196</b> member countries; shares data and captures cross-border fugitives. <b>IAEA</b>: nuclear watchdog; ensures atomic energy is used safely and for peaceful purposes."]])},
 {t:"Non-state actors (NSAs)", bullets:[
   "Individuals, groups, or organizations that operate <b>independently of a government</b> but can influence society, politics, economics, and international affairs."]},
 {t:"Types of non-state actors", entries:T(["Type","Examples"],[
   ["NGOs","<b>Amnesty International</b> (protects human rights); <b>Human Rights Watch</b> (investigates and reports abuses); <b>International Committee of the Red Cross</b> (helps people affected by armed conflict)."],
   ["Multinational corporations","Apple, Coca-Cola: large companies spanning countries; affect economies and trade."],
   ["Violent non-state actors (VNSAs)","<b>Militias and insurgent groups</b> (ISIS, rebel movements); <b>private military companies</b> (Wagner Group); <b>criminal organizations</b> (drug cartels, organized crime)."],
   ["Influential individuals","Business magnates and philanthropists (Bill Gates, Elon Musk) whose wealth and foundations direct global health and technology initiatives."]])},
 {t:"Importance and challenges of NSAs", entries:T(["","Points"],[
   ["Importance","Provide humanitarian aid, promote human rights, create jobs and growth, influence public opinion, help solve poverty, climate change, and disasters. Can also create security challenges."],
   ["Negative impacts","1) Spread of misinformation 2) Corporate exploitation 3) Terrorism and armed conflicts 4) Conflicts with government policies"]])},
 {t:"Asian regionalism", bullets:[
   "Increasing <b>integration, cooperation, and economic interdependence</b> among nations in East, Southeast, and South Asia.",
   "Driven mainly by <b>market forces, trade liberalization, and shared development goals</b> rather than top-down political mandates. Makes Asia a central engine of global trade."]},
 {t:"Key points on economic growth", entries:T(["Point","Meaning"],[
   ["Intra-regional trade acceleration","Tariff cuts through <b>ASEAN and RCEP</b> boost trade within Asia and reduce reliance on Western markets."],
   ["Global supply chain integration","Asia is the world’s <b>primary manufacturing hub</b>; intermediate goods cross borders before final assembly."],
   ["Financial resilience","<b>Chiang Mai Initiative Multilateralization (CMIM)</b> strengthens financial safety nets against crises and currency swings."],
   ["Infrastructure and connectivity","Cross-border transport, power grids, and digital infrastructure lower logistics costs."],
   ["Poverty reduction and jobs","FDI expands industry, creates jobs, and lifts millions into the middle class."]])},
 {t:"Why Asian regionalism matters", entries:T(["Reason","Meaning"],[
   ["1. Stabilizing the global economy","Asia has a large share of world GDP; stable growth buffers global recessions."],
   ["2. Securing supply chains","Electronics, textiles, pharmaceuticals, and auto parts pass through Asian networks."],
   ["3. Shifting power eastward","Trade blocs like RCEP shift influence from Western powers to the <b>Indo-Pacific</b>."],
   ["4. Driving innovation","Investment in digital infrastructure, AI, renewable energy, smart manufacturing."],
   ["5. Fostering peace","Economic interdependence gives nations an incentive to keep diplomatic peace."]])},
 {t:"Product networks", bullets:[
   "Different Asian countries take part in producing <b>the same product</b> by performing <b>different stages</b>. Raw materials, parts, and services cross borders before reaching consumers.",
   "Example: a smartphone designed in one country, using components from several Asian countries, assembled in another, then exported worldwide.",
   "<b>Links to regionalism:</b> more intra-regional trade, supply chain integration, trade agreements (ASEAN, RCEP), FDI, infrastructure and connectivity, and <b>specialization</b>.",
   "<b>Risks:</b> disasters, conflicts, pandemics, or trade restrictions in one country affect others."]},
 {t:"Political ideologies in the global debate", entries:T(["Ideology","Key ideas"],[
   ["Populism","Politics as “the people vs. the elites.” <b>Left-wing</b> targets corporate power and inequality; <b>right-wing</b> targets global elites and immigration. Shared distrust of institutions, media, and experts."],
   ["Religious fundamentalism","Belief that secularism has failed to give moral guidance; goal to base laws on religious texts and traditions; seen across religions and regions."],
   ["Neoliberalism","Global free-market economy with minimal state control; uses <b>privatization, deregulation, globalization</b>. Criticized for inequality and harm to local industries and the environment."],
   ["Democratic socialism","Combines democracy with a socialist economy; high taxes on the wealthy fund public services; universal healthcare, education, welfare; inspired by the <b>Nordic Model</b>."],
   ["Nationalism vs. globalism","<b>Nationalism</b>: sovereignty, borders, national identity. <b>Globalism</b>: cooperation, human rights, global trade. Core issue: duty to own citizens vs. global community."]])},
 {t:"Key Asian organizations", entries:T(["Organization","Description"],[
   ["ASEAN","Association of Southeast Asian Nations. Economic, political, and social cooperation in Southeast Asia; maintains regional centrality, manages great power rivalries, drives economic integration."],
   ["APEC","Asia-Pacific Economic Cooperation. Free trade and sustainable development across the Asia-Pacific; uses <b>soft regionalism</b>."],
   ["SAARC","South Asian Association for Regional Cooperation. Economic and social development in South Asia despite political hurdles."],
   ["ASEAN Plus Three (APT)","Formed in <b>1997</b>; links ASEAN with <b>China, Japan, and South Korea</b>; East Asian macroeconomic cooperation."],
   ["SCO","Shanghai Cooperation Organisation, created in <b>2001</b>; Eurasian political, economic, and security group led by China, Russia, and Central Asian states; combats terrorism and boosts trade."],
   ["ADB","Asian Development Bank. Reduces poverty in Asia and the Pacific through loans, technical assistance, and equity investments for infrastructure."]])}
]};

const TRAPS = [
 "<b>Three camps:</b> Globalists = world more connected. Skeptics = globalization is overrated; countries still control their affairs. Transformationalists = it is changing the world, but effects differ by country.",
 "<b>Three philosophies:</b> Market (free trade, growth), Justice (fairness, human rights, helps ordinary people), Religious (faith and values; secularism or consumerism seen as threats).",
 "<b>Core, semi-periphery, periphery</b> come from <b>Wallerstein’s</b> world-systems theory, which emerged around the <b>16th century</b>.",
 "<b>IMF vs. World Bank:</b> IMF = financial stability, crisis loans, policy advice. World Bank = long-term development (infrastructure, education, health). WTO = trade rules and disputes.",
 "<b>ICJ vs. ICC:</b> ICJ settles disputes between <b>nations</b>. ICC prosecutes <b>individuals</b> for war crimes and genocide.",
 "<b>Internationalism = cooperation</b> to solve shared problems. <b>Globalism = interconnectedness</b>: events in one place affect others.",
 "<b>Member counts:</b> UN 193, NATO 32, EU 27, AU 55, Interpol 196. IGOs need <b>three or more</b> sovereign states.",
 "<b>IGOs vs. non-state actors:</b> IGOs are formed by states. NSAs (NGOs, MNCs, VNSAs, influential individuals) operate independently of governments.",
 "<b>Dates:</b> ASEAN Plus Three = <b>1997</b>; SCO = <b>2001</b>. APEC uses <b>soft regionalism</b>. Trade agreements named for Asia: <b>ASEAN and RCEP</b>; financial safety net: <b>CMIM</b>."
];

/* Flashcards: [chapter, front, back] */
const CARDS = [
 [1,"Working definition of globalization","The process of increasing connections and interactions among people, countries, businesses, and cultures through trade, technology, communication, and the movement of people and ideas."],
 [1,"Globalists believe…","Globalization connects countries and makes the world more connected."],
 [1,"Skeptics believe…","Globalization is not as powerful as people think, because countries still have control over their own affairs."],
 [1,"Transformationalists believe…","Globalization is changing the world, but its effects are different in every country."],
 [1,"What does “underlying philosophy” mean?","The basic ideas, beliefs, or values behind a particular definition."],
 [1,"Market globalism","The belief that globalization should promote free trade, open markets, businesses, and economic growth."],
 [1,"Justice globalism","The belief that globalization should promote fairness, equality, human rights, and social justice, benefiting ordinary people and not only wealthy countries or corporations."],
 [1,"Religious globalism","The belief that globalization can be understood through religious beliefs and values. Some see it as a chance to connect believers; others see secularism or consumerism as threats."],
 [1,"Why are there different definitions of globalization?","People have different interests, experiences, and beliefs. Globalization is complex and multidimensional."],
 [1,"Economic globalization","National economies become increasingly integrated and interdependent through the cross-border movement of goods, services, capital, technology, information, and people."],
 [1,"What drives economic globalization?","Lower transport and communication costs, trade liberalization, and advances in finance and technology."],
 [1,"Opportunities and risks of economic globalization","Opportunities: larger markets, foreign investment, access to technology. Risks: exposure to global shocks and competition."],
 [1,"Modern world system","Wallerstein’s concept of the global capitalist economy as a single interconnected system, emerging around the 16th century and driven by the continuous accumulation of capital."],
 [1,"Core, semi-periphery, periphery","Core: dominant, industrialized economies. Semi-periphery: intermediate economies. Periphery: less developed, often resource-exporting regions."],
 [1,"Who created world-systems theory?","Immanuel Wallerstein."],
 [1,"Role of the IMF in economic globalization","Offers financial assistance and policy advice to stabilize economies."],
 [1,"Role of the World Bank in economic globalization","Supports long-term development projects like infrastructure, education, and healthcare."],
 [1,"International economic organizations named in Group 1","IMF, World Bank, WTO, and OECD."],
 [1,"Role of multinational companies (MNCs)","Operate across countries, build global supply chains, transfer technology, knowledge, and capital, create jobs, and attract foreign investment."],
 [1,"Role of central banks","Through monetary policy (money supply, interest rates, exchange rates), they affect trade, investment flows, and financial stability. Examples: Federal Reserve, European Central Bank."],
 [1,"Benefits and challenges of global economic integration","Benefits: more jobs, cheaper products, new markets, faster growth for developing countries. Challenges: local businesses struggle, income gaps widen, countries depend on each other."],
 [1,"Balanced stance on global economic integration","Support integration while pushing for fair policies that protect workers and local industries."],

 [2,"Market integration","Connecting the economies of different countries or regions through the exchange of goods, services, capital, and resources, reducing barriers to trade."],
 [2,"Example of market integration","The European Union, where trade among member countries is easier."],
 [2,"Four elements of market integration","International trade, investment, businesses, and technology."],
 [2,"Global interstate system","The network of independent, sovereign states that interact through political, economic, social, and diplomatic relationships."],
 [2,"Example of the global interstate system","The Philippines importing goods from China and exporting products to other countries."],
 [2,"What are international financial institutions (IFIs)?","Organizations that support international economic and financial cooperation: IMF, World Bank, WTO."],
 [2,"IMF in one line","Promotes financial and monetary stability."],
 [2,"WTO in one line","Sets international trade rules and resolves trade disputes."],
 [2,"Four major roles of IFIs","Financial support, economic stability, facilitating trade, and international cooperation."],
 [2,"Which institutions rebuilt the global economy after World War II?","The IMF, World Bank, and GATT."],
 [2,"How did globalization expand in the 1990s?","Through multinational companies, trade agreements, and the internet."],
 [2,"Global corporation","A company that operates in multiple countries and manages its business across international markets."],
 [2,"Ten attributes of global corporations","International operations, global market presence, cross-border supply chains, FDI, advanced technology, global workforce, global branding, large financial resources, cultural adaptability, global strategic management."],
 [2,"Foreign direct investment (FDI)","A company invests directly in a business or operation in another country."],
 [2,"How does globalization affect governments?","Increases international cooperation, connects national economies, creates global responsibilities, influences policies, and raises the need to address international issues."],
 [2,"UN and UNSC","UN: largest forum, 193 members. Security Council: makes binding decisions, sends peacekeepers, imposes sanctions."],
 [2,"NATO","Military alliance of 32 North American and European nations. Core rule: collective defense."],
 [2,"IMF as “financial firefighter”","Provides emergency loans and economic support to countries in financial crises."],
 [2,"ICJ vs. ICC","ICJ (World Court): legal disputes between nations. ICC: prosecutes individuals for war crimes or genocide."],
 [2,"Regional alliances: EU, ASEAN, AU","EU: 27 European countries, Euro. ASEAN: growth and stability in Southeast Asia. AU: unity, peace, and integration across 55 African nations."],
 [2,"Internationalism","The idea that countries should cooperate to solve common problems and achieve shared goals."],
 [2,"Globalism","The idea that the world is increasingly connected and events in one part affect people in other parts."],
 [2,"Challenges of integration (Group 2 conclusion)","Inequality, economic dependence, and competition among states."],

 [3,"Global governance","The way countries and other international actors cooperate to manage issues that affect the world."],
 [3,"Why are states the main actors in global governance?","They have the authority to make decisions and represent their countries internationally."],
 [3,"Main roles of states in global governance","Making international rules, joining international organizations, protecting national interests, solving global problems, implementing global agreements."],
 [3,"Intergovernmental organization (IGO)","A group formed by three or more sovereign states to tackle shared global challenges."],
 [3,"WHO","Tracks diseases, organizes pandemic responses, and sets global health guidelines."],
 [3,"UNESCO","Cultural heritage, education programs, global science projects, and World Heritage Sites."],
 [3,"Interpol","International police organization with 196 member countries; shares police data and captures cross-border fugitives."],
 [3,"IAEA","The world’s nuclear watchdog; ensures atomic energy programs are safe and used for peaceful purposes."],
 [3,"Non-state actors (NSAs)","Individuals, groups, or organizations that operate independently of a government but influence society, politics, economics, and international affairs."],
 [3,"Examples of NGOs","Amnesty International (human rights), Human Rights Watch (investigates abuses), International Committee of the Red Cross (aids victims of armed conflict)."],
 [3,"Violent non-state actors (VNSAs)","Militias and insurgent groups (ISIS), private military companies (Wagner Group), and criminal organizations (drug cartels)."],
 [3,"Four negative impacts of NSAs","Spread of misinformation, corporate exploitation, terrorism and armed conflicts, conflicts with government policies."],
 [3,"Asian regionalism","Increasing integration, cooperation, and interdependence among nations in East, Southeast, and South Asia, driven mainly by market forces and trade liberalization."],
 [3,"Which agreements boost intra-Asian trade?","ASEAN and RCEP, by reducing tariff barriers."],
 [3,"Chiang Mai Initiative Multilateralization (CMIM)","Strengthens financial safety nets so Asian economies can protect themselves against global monetary crises and currency fluctuations."],
 [3,"Product networks","Different countries perform different stages of producing the same product; materials, parts, and services cross borders before reaching consumers."],
 [3,"Risks of product networks","Disasters, conflicts, pandemics, or trade restrictions in one country can affect others."],
 [3,"Populism","Frames politics as “the people vs. the elites.” Left-wing targets corporate power and inequality; right-wing targets global elites and immigration."],
 [3,"Neoliberalism","Promotes a global free-market economy with minimal state control through privatization, deregulation, and globalization. Criticized for inequality and harm to local industries and the environment."],
 [3,"Democratic socialism","Combines democracy with a socialist economy; high taxes on the wealthy fund public services. Inspired by the Nordic Model."],
 [3,"Nationalism vs. globalism","Nationalism: sovereignty, borders, national identity. Globalism: cooperation, human rights, global trade."],
 [3,"ASEAN","Association of Southeast Asian Nations: economic, political, and social cooperation; maintains regional centrality and drives integration."],
 [3,"APEC","Asia-Pacific Economic Cooperation: free trade and sustainable development across the Asia-Pacific using soft regionalism."],
 [3,"SAARC","South Asian Association for Regional Cooperation: economic and social development in South Asia despite political hurdles."],
 [3,"ASEAN Plus Three (APT)","Formed in 1997; links ASEAN with China, Japan, and South Korea for East Asian macroeconomic cooperation."],
 [3,"Shanghai Cooperation Organisation (SCO)","Created in 2001; Eurasian political, economic, and security group led by China, Russia, and Central Asian states."],
 [3,"Asian Development Bank (ADB)","Regional financial institution that reduces poverty in Asia and the Pacific through loans, technical assistance, and equity investments for infrastructure."]
].map(c=>({ch:c[0],q:c[1],a:c[2]}));

/* Quiz: [chapter, question, CORRECT, [wrong x3], explanation]  (options are shuffled at runtime) */
const QUIZ = [
 [1,"Which camp believes globalization is not as powerful as people think because countries still control their own affairs?","Skeptics",["Globalists","Transformationalists","Market globalists"],"Skeptics argue states retain control. Globalists see a more connected world; transformationalists see change that differs by country."],
 [1,"Which camp says globalization is changing the world but its effects differ in every country?","Transformationalists",["Skeptics","Globalists","Justice globalists"],"Transformationalists stress change with uneven effects."],
 [1,"“Underlying philosophy” of a definition means:","The basic ideas, beliefs, or values behind it",["The year it was first written","The country where it began","The author’s profession"],"It is the set of beliefs or values that shapes how someone defines globalization."],
 [1,"Someone who sees globalization mainly as free trade and open markets holds which philosophy?","Market globalism",["Justice globalism","Religious globalism","Skepticism"],"Market globalism promotes free trade, open markets, businesses, and economic growth."],
 [1,"Which philosophy holds that globalization should benefit ordinary people, not only wealthy countries and corporations?","Justice globalism",["Market globalism","Religious globalism","Transformationalism"],"Justice globalism focuses on fairness, equality, human rights, and social justice."],
 [1,"Which philosophy may view secularism or consumerism as threats?","Religious globalism",["Market globalism","Justice globalism","Skepticism"],"Religious globalism focuses on faith and protecting religious values."],
 [1,"Why are there different definitions of globalization?","People have different interests, experiences, and beliefs",["Because globalization is a simple process","Because only economists define it","Because governments ban other definitions"],"Globalization is complex and multidimensional, so no single view is complete."],
 [1,"Which best defines economic globalization?","Increasing integration and interdependence of national economies through cross-border flows",["A country closing its markets to protect industries","Governments controlling all trade","A single world currency"],"It involves the movement of goods, services, capital, technology, information, and people."],
 [1,"Which of these is NOT a driver of economic globalization?","Higher transport and communication costs",["Lower transport costs","Trade liberalization","Advances in finance and technology"],"Lower, not higher, costs drive economic globalization."],
 [1,"The modern world system is a concept from:","Immanuel Wallerstein",["Adam Smith","Karl Marx","Thomas Friedman"],"It comes from Wallerstein’s world-systems theory."],
 [1,"In the modern world system, less developed, resource-exporting regions are called the:","Periphery",["Core","Semi-periphery","Metropole"],"Core = dominant industrialized economies; semi-periphery = intermediate; periphery = less developed."],
 [1,"Around which century did the modern world system emerge?","16th century",["12th century","18th century","20th century"],"It emerged around the 16th century."],
 [1,"Which organization supports long-term development projects like infrastructure, education, and healthcare?","World Bank",["IMF","WTO","OECD"],"The IMF stabilizes economies; the World Bank funds long-term development."],
 [1,"Which institution offers financial assistance and policy advice to stabilize economies?","IMF",["World Bank","ASEAN","UNESCO"],"The IMF handles financial stability and crisis support."],
 [1,"Which actor establishes global supply chains and transfers technology, knowledge, and capital across countries?","Multinational companies",["Central banks","Local governments","Trade unions"],"MNCs operate across countries and link local economies to global markets."],
 [1,"The Federal Reserve and the European Central Bank influence globalization mainly through:","Monetary policy",["Military alliances","Cultural exchange","Trade disputes"],"They regulate money supply, interest rates, and exchange rates."],
 [1,"Which is a CHALLENGE of global economic integration?","Local businesses may struggle to compete",["Cheaper products","Access to new markets","Faster growth in developing countries"],"The other options are benefits."],
 [1,"A balanced stance on global economic integration:","Supports integration while pushing for fair policies that protect workers and local industries",["Rejects all trade","Supports integration with no regulation","Supports only local industries"],"The balanced view keeps the benefits while protecting vulnerable groups."],

 [2,"Market integration is best described as:","Connecting the economies of countries or regions through exchange of goods, services, capital, and resources",["Combining all countries under one government","Banning foreign products","Replacing currencies with barter"],"It reduces trade barriers and makes markets work as one larger market."],
 [2,"Which is an example of market integration?","The European Union allowing easier trade among members",["A country imposing high tariffs","A family farm selling at a local market","A city passing a zoning law"],"The EU is the example in the Group 2 slides."],
 [2,"The Global Interstate System refers to:","The network of independent, sovereign states and their relationships",["A single world government","The internet","A trading bloc of Asian countries only"],"It covers political, economic, social, and diplomatic interaction among states."],
 [2,"The Philippines importing goods from China and exporting to others illustrates:","The global interstate system",["Internationalism only","A domestic market","The periphery"],"It shows how states interact within the system."],
 [2,"Which international financial institution is responsible for international trade rules?","WTO",["IMF","World Bank","ASEAN"],"The WTO sets trade rules; the IMF promotes monetary stability; the World Bank supports development."],
 [2,"Which is NOT one of the four major roles of IFIs?","Controlling national armies",["Financial support","Economic stability","Facilitating trade"],"The fourth role is international cooperation, not military control."],
 [2,"Which institutions helped rebuild the global economy after World War II?","IMF, World Bank, and GATT",["NATO, ASEAN, and the EU","ICC, ICJ, and UNESCO","APEC, SAARC, and SCO"],"These institutions promoted trade and rebuilt the postwar economy."],
 [2,"Which pushed globalization forward rapidly in the 1990s?","Multinational companies, trade agreements, and the internet",["The Cold War","The gold standard","Colonial empires"],"These made economies more interconnected."],
 [2,"A company investing directly in a factory in another country is engaging in:","Foreign direct investment",["Tariff protection","Import substitution","Nationalization"],"FDI is one of the ten attributes of global corporations."],
 [2,"A company whose brand is recognized in many countries has which attribute?","Global branding",["Global workforce","Cross-border supply chains","Strategic management"],"Global branding is attribute 7."],
 [2,"Which attribute means being flexible and respectful of cultural differences?","Adaptability to different cultures",["Large financial resources","Advanced technology","International operations"],"Attribute 9 of the global corporation list."],
 [2,"Which body makes binding decisions to maintain peace, send peacekeepers, or impose sanctions?","UN Security Council",["WTO","ICC","UNESCO"],"The UNSC has binding authority within the UN."],
 [2,"NATO’s core rule is:","Collective defense: an attack on one member is an attack on all",["Free trade among members","A single currency","Shared border control"],"NATO is a military alliance of 32 nations."],
 [2,"Which court handles legal disputes between nations, such as border disputes?","International Court of Justice (ICJ)",["International Criminal Court (ICC)","WTO","IMF"],"The ICC prosecutes individuals; the ICJ settles disputes between states."],
 [2,"Which regional body has 27 European countries sharing laws, open borders, and the Euro?","European Union",["NATO","African Union","ASEAN"],"The EU is a political and economic partnership."],
 [2,"Which statement describes internationalism?","Countries should cooperate to solve common problems and achieve shared goals",["The world is increasingly connected","Nations should avoid each other","One government should rule the world"],"Globalism is the idea of interconnectedness."],
 [2,"Which is a challenge of globalization listed in Group 2’s conclusion?","Inequality, economic dependence, and competition among states",["Lower trade","Fewer international organizations","Stronger national borders"],"Fair policies and responsible international relations are needed."],

 [3,"Global governance is best described as:","How countries and other international actors cooperate to manage world issues",["A single world government","Military control by great powers","The rules of a single country"],"There is no world government; actors cooperate."],
 [3,"Why are states the main actors in global governance?","They have the authority to make decisions and represent their countries",["They are the richest","They have the most citizens","They own the UN"],"States are sovereign."],
 [3,"An IGO is formed by:","Three or more sovereign states",["Private companies","Individual philanthropists","Any NGO"],"IGOs are groups of states."],
 [3,"Which IGO is the “global referee” for commerce?","WTO",["IMF","WHO","IAEA"],"The WTO oversees trade rules among nearly all nations."],
 [3,"Which IGO tracks diseases and organizes pandemic responses?","WHO",["UNESCO","Interpol","World Bank"],"WHO is the health authority."],
 [3,"Which IGO designates World Heritage Sites?","UNESCO",["WHO","ICC","IAEA"],"UNESCO covers culture, education, and science."],
 [3,"Which organization is the world’s nuclear watchdog?","IAEA",["Interpol","ICC","WHO"],"The IAEA checks atomic energy is used for peaceful purposes."],
 [3,"Interpol has how many member countries (per Group 3)?","196",["193","32","27"],"193 is the UN; 32 is NATO; 27 is the EU."],
 [3,"Non-state actors are best described as:","Groups or individuals operating independently of governments that influence global affairs",["Governments of small states","Branches of the UN","Military alliances"],"Examples: NGOs, MNCs, VNSAs, influential individuals."],
 [3,"Amnesty International is an example of:","An NGO protecting human rights",["An IGO","A violent non-state actor","A central bank"],"Amnesty works to protect human rights."],
 [3,"The Wagner Group is an example of a:","Private military company",["NGO","Central bank","Regional alliance"],"It is a for-profit security and combat entity (VNSA)."],
 [3,"Which is NOT a negative impact of non-state actors listed by Group 3?","Lower inflation",["Spread of misinformation","Corporate exploitation","Terrorism and armed conflicts"],"The fourth is conflicts with government policies."],
 [3,"Asian regionalism is driven mainly by:","Market forces, trade liberalization, and shared development goals",["A single political authority","Military conquest","Colonial treaties"],"It is not driven by top-down political mandates."],
 [3,"Which agreements boost intra-Asian trade by reducing tariffs?","ASEAN and RCEP",["NATO and WTO","EU and AU","SAARC and SCO"],"Group 3 names ASEAN and RCEP."],
 [3,"The Chiang Mai Initiative Multilateralization (CMIM) mainly provides:","Financial safety nets against currency and monetary crises",["Military protection","Cultural exchange","Agricultural subsidies"],"It supports financial resilience."],
 [3,"A smartphone designed in one country, with parts from several others and assembled elsewhere illustrates:","Product networks",["Import substitution","Nationalism","Populism"],"Different countries perform different production stages."],
 [3,"Which is a risk of product networks?","Disasters, conflicts, pandemics, or trade restrictions in one country affect others",["Higher tariffs for all","Less specialization","Fewer jobs everywhere"],"Interdependence spreads shocks."],
 [3,"Which ideology promotes privatization, deregulation, and a global free market with minimal state control?","Neoliberalism",["Democratic socialism","Populism","Religious fundamentalism"],"It is criticized for increasing inequality."],
 [3,"The Nordic Model inspires which ideology?","Democratic socialism",["Neoliberalism","Nationalism","Populism"],"High taxes on the wealthy fund universal services."],
 [3,"Politics framed as “the people vs. the elites” is:","Populism",["Neoliberalism","Democratic socialism","Globalism"],"It can be left-wing or right-wing."],
 [3,"Which organization was formed in 1997 and links ASEAN with China, Japan, and South Korea?","ASEAN Plus Three (APT)",["APEC","SAARC","SCO"],"APT drives East Asian macroeconomic cooperation."],
 [3,"The Shanghai Cooperation Organisation (SCO), created in 2001, is led by:","China, Russia, and Central Asian states",["Japan and South Korea","India and Pakistan","The United States and the EU"],"It combats regional terrorism and boosts trade."],
 [3,"Which organization is dedicated to reducing poverty in Asia and the Pacific through loans and technical assistance?","Asian Development Bank (ADB)",["APEC","SAARC","SCO"],"ADB funds infrastructure and development."],
 [3,"Which Asian organization uses “soft regionalism” to promote free trade across the Asia-Pacific?","APEC",["SAARC","ASEAN","ADB"],"APEC connects diverse economies."],
 [3,"Which organization fosters cooperation in South Asia despite political hurdles?","SAARC",["ASEAN","APEC","SCO"],"SAARC = South Asian Association for Regional Cooperation."]
].map(q=>({ch:q[0],q:q[1],ok:q[2],bad:q[3],e:q[4]}));
