type HomeProps = {
    title: string;
}

type NavbarProps = {
    logo: any;
    links: {
        name: string;
        url: string;
    }[];
    button: string;
}

type BoxProps = {
    title: string;
    description: string;
    imageSrc: string;
    bgColor: string;
}

type contentDataProps = {
    data: string;
    index: string;
}