---
title: المساهمون في المشروع
permalink: /contributors.html
---

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
يمكن أن تكون من أحد المساهمون في المشروع بمجرد <a href="{{ site.github.repository_url }}" title="Pull request">فتح طلب تغيير</a> لإضافة كلمة إلى القاموس 
<br>
<table>
  <tr>
{% for contributor in site.github.contributors %}
<td align="center">
 <a href="{{ contributor.html_url }}">
  <img src="{{ contributor.avatar_url }}" width="100px;" alt="{{ contributor.html_url }}"/>
  <br>
  <sub>
   <b>{{ contributor.login }}</b>
  </sub>
 </a>
 <br>
 <a href="https://github.com/all-contributors/all-contributors/commits?author={{ contributor.html_url }}" title="مساهمات">
 المساهمات {{ contributor.contributions }}
 </a>
</td>
{% endfor %}
  </tr>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
