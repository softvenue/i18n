---
title: المساهمون في المشروع
layout: default
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
 <a href="{{ site.github.repository_url }}/commits?author={{ contributor.login }}" title="مساهمات">
 <span title="عدد المساهمات">&#8470; : {{ contributor.contributions }}</span>
 </a>
</td>
{% endfor %}
  </tr>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->