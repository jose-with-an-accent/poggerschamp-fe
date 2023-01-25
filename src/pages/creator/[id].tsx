import Alert from "../../components/Alert";
import Card from "../../components/Card"

export default function CreatorViewPage() {
    const creator = "HasanAbi";
    return(
        <div className="">
        <h1 className="text-2xl font-bold">{creator} - Videos</h1>
        <Alert text="This creator's twitch VODs were last analyzed Jan 24, 2022." />
        <div className="flex flex-row flex-wrap gap-3">
        <Card heading="PoggersChamp" description="" to="/creator/video/1"/>
        <Card heading="PoggersChamp" description="" to="/"/>
        <Card heading="PoggersChamp" description="" to="/"/>
        <Card heading="PoggersChamp" description="" to="/"/>
        <Card heading="PoggersChamp" description="" to="/"/>
        <Card heading="PoggersChamp" description="" to="/"/>
        <Card heading="PoggersChamp" description="" to="/"/>
        <Card heading="PoggersChamp" description="" to="/"/>
        <Card heading="PoggersChamp" description="" to="/"/>
        <Card heading="PoggersChamp" description="" to="/"/>
        <Card heading="PoggersChamp" description="" to="/"/>
        </div>
        </div>
    )
}