import React from 'react';

const JobBoardComponent = ({ 
    job: { id,
            company,
            logo,
            isNew,
            featured,
            position,
            role,
            level,
            postedAt,
            contract,
            location,
            languages,
            tools,
            },
}) => {
    const tags = [role, level];

        if (tools) {
            tags.push(...tools);
        }

        if (languages) {
            tags.push(...languages);
        }

    return (
        <div className="flex bg-white shadow-md m-4 p-6 rounded">
            <div>
                <img src= {logo} alt={company} />
            </div>

            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-green-500">
                    {company}
                    {isNew && <span>New</span>}
                    {featured && <span>New</span>}
                </h3>
                <h2 className="font-bold text-xl">
                    {position}
                </h2>
                <p className="text-gray-700"> 
                    {postedAt} · {contract} · {location}
                </p>
            </div>
            <div className=" flex items-center ml-auto">
                {tags ? 
                tags.map((langAndTool) => 
                <span className="text-green-400 bg-green-100 font-bold m-2 p-2 rounded">{langAndTool}</span>) : ''}
                
            </div>
        </div>
    )
}
    


export default JobBoardComponent;