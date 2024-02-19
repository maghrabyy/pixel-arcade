import { ReactNode, createContext } from "react";

type UserContextType = {
    displayName:string;
    userAvatar:string;
}

const UserContext = createContext<UserContextType>(null as unknown as UserContextType);

export const UserProvider = ({children}:{children:ReactNode})=>{
    function capitalizeFirstLetter(text:string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    const generateDisplayName = ():string=>{
        const adjectiveList = ['Affectionate', 'Amicable', 'Ambitious', 'Agreeable', 'Aromatic', 'Auspicious', 'Affluent', 'Authentic', 'Acoustic', 'Amusing', 'Beautiful', 'Bold', 'Basic', 'Bountiful', 'Brilliant', 'Believable', 'Blue', 'Brave', 'Boundless', 'Better', 'Canny', 'Competent', 'Captive', 'Cautious', 'Cosy', 'Creamy', 'Cordial', 'Creative', 'Cheerful', 'Chaotic', 'Daring', 'Devoted', 'Dusty', 'Dim', 'Decisive', 'Dazzling', 'Dangling', 'Determined', 'Different', 'Dearest', 'Exclusive', 'Exact', 'Echoing', 'Eatable', 'Elegant', 'Explosive', 'Edifying', 'Elevated', 'Elegant', 'Earthly', 'Fancy', 'Faithful', 'Fascinating', 'Fantastic', 'Famous', 'Fair', 'Fearless', 'Fading', 'Fleeting', 'First', 'Greasy', 'Gracious', 'Graphic', 'Gentle', 'Global', 'Golden', 'Glorious', 'Giddy', 'Gigantic', 'Glad', 'Haunting', 'Hasty', 'Hard', 'Handy', 'Hearty', 'Hidden', 'Hectic', 'Happy', 'Harmless', 'Huge', 'Icy', 'Indispensable', 'Intuitive', 'Identifiable', 'Important', 'Internal', 'Imaginary', 'Incredible', 'Immense', 'Innate', 'Jolly', 'Jovial', 'Jubilant', 'Just', 'Joyful', 'Judicial', 'Jittery', 'Justifiable', 'Joyous', 'Judicious', 'Keen', 'Knightly', 'Kind', 'Knotted', 'Kindled', 'Knowledgeable', 'Kindred', 'Kinetic', 'Kingly', 'Kempt', 'Lyrical', 'Lovable', 'Lively', 'Lustrous', 'Loyal', 'Lifelike', 'Leafy', 'Lenient', 'Likeable', 'Major', 'Maintainable', 'Maximum', 'Mythical', 'Magical', 'Magnanimous', 'Magnetic', 'Magnificent', 'Miniscule', 'Majestic', 'Nameless', 'Narrow', 'Nourishing', 'Necessary', 'Normal', 'Neutral', 'Noisy', 'Noble', 'Nice', 'Neat', 'Obedient', 'Obscure', 'Obvious', 'Odd', 'Oily', 'Older', 'Operational', 'Observant', 'Oblivious', 'Omnipresent', 'Pale', 'Pampered', 'Parallel', 'Pure', 'Picturesque', 'Passive', 'Patient', 'Peaceful', 'Peculiar', 'Perfect', 'Quiet', 'Quirky', 'Quick', 'Quantitative', 'Qualified', 'Questionable', 'Qualitative', 'Quick-witted', 'Quaint', 'Quick-minded', 'Radiant', 'Rapid', 'Refundable', 'Repulsive', 'Refreshing', 'Reliable', 'Reminiscent', 'Rich', 'Robust', 'Rare', 'Sunny', 'Safe', 'Subtle', 'Successful', 'Strong', 'Super', 'Sweet', 'Stylish', 'Special', 'Spacious', 'Tactical', 'Tailored', 'Thoughtful', 'Triumphant', 'Thirsty', 'Tranquil', 'Thrilling', 'Thin', 'Thankful', 'Thought-provoking', 'Uniform', 'Urban', 'Usual', 'Unique', 'Utmost', 'Urgent', 'United', 'Ultra', 'Ubiquitous', 'Unhappy', 'Vacant', 'Valid', 'Various', 'Vintage', 'Verbal', 'Vibrant', 'Virtual', 'Vocal', 'Violet', 'Versatile', 'Warm', 'Whopping', 'Witty', 'Wonderful', 'Worldly', 'Winged', 'Weary', 'Wavy', 'Wild', 'Windy', 'Yellowish', 'Yummy', 'Yearning', 'Youngish', 'Yearly', 'Yielding', 'Yearlong', 'Yappy', 'Young', 'Youthful'];
        const  randAdjectiveIndex = Math.floor(Math.random()  * (adjectiveList.length-1));
        const nounList = ['awe', 'beauty', 'bravery', 'brilliance', 'brutality', 'calmness', 'charity', 'coldness', 'compassion', 'confidence', 'contentment', 'courage', 'curiosity', 'dedication', 'determination', 'ego', 'elegance', 'enthusiasm', 'envy', 'evil', 'faithfulness', 'fear', 'generosity', 'goodness', 'graciousness', 'hatred', 'helpfulness', 'helplessness', 'honesty', 'honor', 'hope', 'humility', 'humor', 'infatuation', 'insanity', 'integrity', 'intelligence', 'jealousy', 'kindness', 'love', 'loyalty', 'maturity', 'patience', 'perseverance', 'power', 'sanity', 'self-control', 'self-discipline', 'sensitivity', 'sophistication', 'strength', 'stupidity', 'sympathy', 'talent', 'tolerance', 'trust', 'warmth', 'weakness', 'wisdom', 'wit', 'adoration', 'amazement', 'anger', 'anxiety', 'apprehension', 'clarity', 'delight', 'despair', 'disappointment', 'disbelief', 'excitement', 'fascination', 'friendship', 'grief', 'happiness', 'joy', 'misery', 'pleasure', 'pride', 'relaxation', 'relief', 'romance', 'sadness', 'satisfaction', 'silliness', 'sorrow', 'surprise', 'tiredness', 'uncertainty', 'worry', 'ability', 'artistry', 'belief', 'chaos', 'comfort', 'death', 'deceit', 'dexterity', 'disturbance', 'dream', 'energy', 'enhancement', 'favoritism', 'gossip', 'grace', 'hearsay', 'laughter', 'memory', 'movement', 'omen', 'opinion', 'peculiarity', 'principle', 'reason', 'rumor', 'service', 'shock', 'sleep', 'speculation', 'submission', 'thought', 'thrill', 'wish', 'glory', 'reflection', 'consciousness', 'Appearance', 'Resistance', 'appointment', 'enjoyment', 'madness', 'possibility', 'responsibility', 'probability', 'silence', 'freedom', 'independence', 'pearl', 'cocunut', 'banana', 'frog', 'shrimp', 'powder', 'lilic', 'hazelnut', 'corn', 'lemon', 'watermelon', 'honey', 'rust', 'crust'];
        const  randNounIndex = Math.floor(Math.random()  * (nounList.length-1));
        return adjectiveList[randAdjectiveIndex] + ' ' + capitalizeFirstLetter(nounList[randNounIndex]);
    }
    const generateRandAvatar = ():string=>{
        const randAvNum = Math.floor(Math.random()  * 31 + 1)
        const imgSrc = `/avatars/avatar${randAvNum}.png`
        return imgSrc;
    }
    const displayName = generateDisplayName();
    const userAvatar = generateRandAvatar();
    const dataToShare = {
        displayName,
        userAvatar
    }
    return <UserContext.Provider value={dataToShare}>
        {children}
    </UserContext.Provider>
}

export default UserContext;