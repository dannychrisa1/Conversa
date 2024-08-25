import { Tagline } from "./Tagline"

type HeadingProps = {
    className: string
    title: string
    text?:string
    tag?:string
}

export const Heading = ({ className, title, text, tag }: HeadingProps) => {
    return (
        <div className={`${className} max-w-50 mx- mb-12 lg:mb-20`}>
            {
                tag && (
                    <Tagline className="mb-4 md:justify-center">{tag}</Tagline>
                )
            }
            {title &&
                <h2 className="h2">{title}</h2>
            }
            {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
            
        </div>

    )
}