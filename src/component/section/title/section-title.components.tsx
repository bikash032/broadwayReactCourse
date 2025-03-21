type SectionTitleProps = {
    PageTitle: string;
    classes: string;
    subTitle?: string;
};
const SectionSubTitle = ({ subTitle }: { subTitle: string }) => {
    return (
        <div className="overflow-hidden whitespace-nowrap text-3xl font-bold text-white-200 w-full">
            <p className="inline-block animate-scroll w-full ">{subTitle}</p>
        </div>
    );
};
const SectionTitle = (props: Readonly<SectionTitleProps>) => {
    return (
        <>
            <h1 className=" m-5 px-10 text-center text-2xl text-white font-bold">
                {props.PageTitle}
            </h1>
            {props.subTitle ? (
                <SectionSubTitle subTitle={props.subTitle} />
            ) : null}
        </>
    );
};

export default SectionTitle;
