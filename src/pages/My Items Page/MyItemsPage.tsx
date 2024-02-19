import { useNavHeight } from "../../Custom Hooks/useNavHeight"
import { useContext } from "react";
import UserItemsContext from "../../Context/UserItemsContext";
import { ItemCard } from "../../components/ItemCard";
import { TransparentContainer } from "../../util/TransparentContainer";
import { Reveal } from "../../util/Reveal";
import { SectionTitle } from "../../util/SectionTitle";
import spaceInvader from '../../assets/images/objects/spaceInvader.png';

export const MyItemsPage = ()=>{
    const  { userItems } = useContext(UserItemsContext);
    const navHeight = useNavHeight();
    return <div className="flex justify-center py-4" style={{minHeight: `calc(100vh - ${navHeight}px) `,}}>
        <TransparentContainer className="h-full">
            <Reveal>  
                <SectionTitle title="My Items" className="text-white mb-4" />
                {userItems.length > 0 ? 
                    <div className="user-items-list grid gap-2 lg:grid-cols-3 sm:grid-cols-2 grid-col-1">
                        {userItems.map(item=>{
                            return <ItemCard key={item.img} item={item} ownedItem horizontalAlign />
                        }) }
                    </div>
                :
                <div className="empty-items-list flex flex-col items-center">
                    <h1 className="text-white text-center font-pixel font-semibold text-4xl">You don't own any items.</h1>
                    <img src={spaceInvader} width={380} alt="space invader" />
                </div>
                }
            </Reveal>
        </TransparentContainer>
    </div>
}