import { MessageInstance } from "antd/es/message/interface";
import { Link } from "react-router-dom";
import React from "react";

export function GetMessageApi() { return mMessageApi };
export function SetMessageApi(messageApi: MessageInstance) { mMessageApi = messageApi; }

export function ItemDeveloping({ label }: { label: string }) {
    return <div onClick={() => mMessageApi!.open({ type: "error", content: "施工中(￣▽￣)\"" })}>
        {label}
    </div>
}

export function HasLinkPath(path: string) {
    return linkables.has(path);
}
export function GetLinkPage(path: string) {
    return linkables.get(path);
}
export function TryActionLinkAble(raw: any) {
    let linkable = raw as { label: React.JSX.Element, key: string, page?: React.FC }
    if ((linkable.label && linkable.key && linkable.page) === undefined)
        return false;

    let key = linkable.key
    let value = linkable.page!;
    linkables.set(key, value);
    linkable.label = <Link to={key}>{linkable.label}</Link>
    delete linkable.page;//似乎这个对象的属性会被带到页面中，react无法识别会导致警告，所以处理完后删除
    return true;
}

let linkables = new Map<string, React.FC>();//作为全局变量以防回收
let mMessageApi: MessageInstance;


