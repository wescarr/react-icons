import Icon from "@components/@core/icon";
import IconsPageLoading from "./loading";
import loadable from "@loadable/component";
import { getIcons } from "@utils/getIcons";

export default function IconSetViewer({ icon }) {
  const IconSet = loadable.lib(() => getIcons(icon.id));

  return (
    <>
      <h2>Icons</h2>
      <IconSet fallback={<IconsPageLoading />}>
        {({ default: icons }) => (
          <div className="icons">
            {Object.keys(icons).map((name) => (
              <Icon key={name} icon={icons[name]} name={name} />
            ))}
          </div>
        )}
      </IconSet>
    </>
  );
}
