import ButtonSvg from "../assets/svg/ButtonSvg"

type buttonProps = {
    className: string,
    children: React.ReactNode,
    href?: string,
    onClick?: () => void,
    px?: string,
    white?: boolean,
}

export const Button = ({ className, href, children, onClick, px, white }: buttonProps) => {
    const spanclasses = `relative z-10`
    const classes = `button relative inline-flex items-center
    justify-center h-11 transition-colors hover:text-color-1
    ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`
    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanclasses}>{children}</span>
            <ButtonSvg white={white} />
        </button>
    )

    const renderLink = () => (

        <a href={href} className={classes}>
            <span className={spanclasses}>{children}</span>
            <ButtonSvg white={white} />
        </a>

    )
    return href ? renderLink() : renderButton()


}