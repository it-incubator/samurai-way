import React from 'react';

type ProfileInfoType = {
    imgUrl:string
    imgAlt:string
    description:string
}


export const ProfileInfo = (props:ProfileInfoType) => {
    return (
        <div>
            <img
                src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                alt="Landscape"/>
            <p>ava+descr</p>
        </div>
    );
};

