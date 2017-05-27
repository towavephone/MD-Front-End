var React = require('react');
var HeadNav = React.createClass({
    displayName: 'HeadNav',
    getDefaultProps: function () {
        return {tabs_url: [location.hash]};
    },
    render: function () {
        var tabs = [];
        for (var i in this.props.tabs_url) {
            var item = this.props.tabs_url[i];
            var is_active_first = location.hash.split('?')[0].substring(1) == item.url.split('?')[0].substring(1);
            var dropdown = [];
            var hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;
            var className = is_active_first ? 'active' : '';
            var ul = null;
            if (hasDropdown) {
                for (var j in item.dropdown) {
                    var item2 = item.dropdown[j];
                    var is_active_second = location.hash == item2.url;
                    dropdown.push(<li key={j} className={is_active_second ? 'active' : ''}><a href={is_active_second ? 'javascript:void(0)' : item2.url}>{item2.name}</a></li>);
                }
                ul = <ul className="dropdown-menu">
                    {dropdown}
                </ul>;
            }
            tabs.push(<li key={i} className={'dropdown ' + className}>
                    <a className="dropdown-toggle" data-toggle="dropdown" href={is_active_first ? 'javascript:void(0)' : item.url}>{item.name}</a>
                    {ul}
                </li>);
        }
        return (
            <ul className="nav navbar-nav navbar-right">{tabs}</ul>
        );
    }
});

module.exports = HeadNav;
