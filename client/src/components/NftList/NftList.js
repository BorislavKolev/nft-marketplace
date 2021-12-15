import NftCard from "./NftCard";

const NftList = ({
    nfts
}) => {
    console.log(nfts);
    return (
        <>
             {nfts.length > 0
                ? (
                    <>
                        {nfts.map(x => <NftCard key={x._id} nft={x} />)}
                    </>
                )
                : <p>Currently there are no NFTs in this section...</p>
            } 
        </>
    );
}

export default NftList;