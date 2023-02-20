import React, { ReactElement, useMemo } from "react";
import alertIcon from "../resources/images/alert.svg";
import mapIcon from "../resources/images/map.svg";

import reportIcon from "../resources/images/report.svg";

import chatIcon from "../resources/images/chat.svg";
import dashboard from "../resources/images/dashboard.svg";
import users from "../resources/images/users.svg";
import history from "../resources/images/history.svg";
import settingIcon from "../resources/images/setting.svg";



export type SidebarLinkType = {
  title: string;
  icon?: ReactElement | null | string;
  active?: boolean;
  onClick?: () => void;
  hasPrivilege?: boolean;
  buttonColor?: string;
  to?: string;
};

export const useMenuLinks = (): SidebarLinkType[] => {
  const links = useMemo<SidebarLinkType[]>(() => {
    return [
      {
        title: "alert",
        icon: alertIcon,
        to:"/alert"
      },
      {
        title: "Report",
        icon: reportIcon,
      },
      {
        title: "Chat",
        icon: chatIcon,
      },
      {
        title: "Map",
        icon: mapIcon,
      },
      {
        title: "Setting",
        icon: settingIcon,
        to:"/setting"
      },
    ];
  }, []);
  return links || [];
};
export const useSettingsLinks = (): SidebarLinkType[] => {
  const links = useMemo<SidebarLinkType[]>(() => {
    return [
      {
        to: "#",
        title: "FORECE REFRESH",
      },
      { to: "/dashboard", title: "ADMIN DASHBOARD" },
      { to: "#", title: "EDIT USER" },
      { to: "#", title: "GUIDANCES" },
      { to: "#", title: "ALERT HISTORY" },
      { to: "#", title: "ALERT SUBSCRIPTIONS" },
      { to: "#", title: "EDIT GOOGLE MAP" },
      { to: "#", title: "LOGOUT", buttonColor: "danger" },
    ];
  }, []);
  return links || [];
};
export const useAdminLinks = (): SidebarLinkType[] => {
  const links = useMemo<SidebarLinkType[]>(() => {
    return [
      {
        title: "DASHBOARD",
        icon: dashboard,
        to:"/dashboard"
      },
      {
        title: "USERS",
        icon: users,
        to:"/user"

      },
      {
        title: "ALERT TYPES",
        icon: alertIcon,
        to:"/alert-type"

      },
      {
        title: "ALERT HISTORY",
        icon: history,
        to:"/alert-history"

      },
      {
        title: "CHAT HISTORY",
        icon: chatIcon,
        to:"/chat-history"

      },
      {
        title: "Setting",
        icon: settingIcon,
        to:"/setting"
      },
    ];
  }, []);
  return links || [];
};