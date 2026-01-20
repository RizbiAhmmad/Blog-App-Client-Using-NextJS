import { Navbar } from "@/components/layouts/Navbar";

export default function CommonLayout({children}:{children:React.ReactNode}) {
    return(
        <div>
            <h1>This is common Layout</h1>
            <Navbar></Navbar>
            {children}
        </div>
    )
}